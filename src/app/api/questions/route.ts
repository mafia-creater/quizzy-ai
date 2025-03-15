import { NextResponse } from "next/server";
import { quizCreationSchema } from "@/schemas/quiz";
import { ZodError } from "zod";
import { strict_output } from "@/lib/gemini";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate request body
        const { amount, topic, type } = quizCreationSchema.parse(body);

        let questions = [];

        if (type === "mcq") {
            // Simple format for Gemini
            const result = await strict_output(
                "You are a helpful AI that generates quiz questions.",
                `Create ${amount} multiple-choice questions about ${topic}. Each question should have one correct answer and three incorrect options.`,
                {
                    questions: [
                        {
                            question: "Example question?",
                            answer: "Correct answer",
                            options: ["Option A", "Option B", "Option C", "Option D"]
                        }
                    ]
                }
            );
            questions = result.questions || [];
        } else if (type === "fib") {
            const result = await strict_output(
                "You are a helpful AI that generates quiz questions.",
                `Create ${amount} open-ended questions about ${topic}. Each answer should be 15 words or less.`,
                {
                    questions: [
                        {
                            question: "Example question?",
                            answer: "Brief answer (15 words max)"
                        }
                    ]
                }
            );
            questions = result.questions || [];
        }

        return NextResponse.json({ 
            questions,
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error generating quiz:", error);
        
        if (error instanceof ZodError) {
            return NextResponse.json(
                { errors: error.issues },
                { status: 400 }
            );
        }
        
        return NextResponse.json(
            { error: "Something went wrong generating the quiz", details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

// Explicit export
