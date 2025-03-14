import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useForm } from 'react-hook-form'
import { quizCreationSchema } from '@/schemas/quiz'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 

type Props = {}

type Input = z.infer<typeof quizCreationSchema>

const QuizCreation = (props: Props) => {
    const form = useForm<Input>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
            amount: 3,
            topic: '',
            type: 'mcq'
        }
    })
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> 
        <Card>
            <CardHeader>
                <CardTitle className='font-bold text-2xl'>
                    Create a Quiz
                </CardTitle>
                <CardDescription>
                    Choose a topic
                </CardDescription>
            </CardHeader>
            <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
                </Form>

                
            </CardContent>
        </Card>
    </div>
  )
}

export default QuizCreation