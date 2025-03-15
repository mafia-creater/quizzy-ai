import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API with your key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function strict_output(system_prompt: string, user_prompt: string, output_format: any) {
  try {
    // Get the model - use the most basic version name
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    // Combine all prompts into one
    const fullPrompt = `
${system_prompt}

${user_prompt}

You must respond ONLY with a valid JSON object that exactly matches this structure:
${JSON.stringify(output_format, null, 2)}

Do not include any explanations, notes, or additional text outside the JSON structure.
`;

    // Generate content using the simplified API
    const result = await model.generateContent([fullPrompt]);
    const response = result.response;
    const text = response.text();

    if (!text) {
      throw new Error("Empty response from Gemini API");
    }

    // Extract JSON from the response if needed
    try {
      // Try to parse directly first
      return JSON.parse(text);
    } catch (parseError) {
      // If direct parsing fails, try to extract JSON from markdown code blocks
      const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
                       text.match(/\{[\s\S]*\}/);
      
      if (jsonMatch) {
        const jsonStr = jsonMatch[1] || jsonMatch[0];
        return JSON.parse(jsonStr);
      }
      
      throw new Error("Failed to parse JSON from response: " + text.substring(0, 100) + "...");
    }
  } catch (error) {
    console.error("🔴 Error in strict_output:", error);
    return { questions: [] }; // Return empty questions as fallback
  }
}