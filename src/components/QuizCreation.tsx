"use client"
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
import { BookOpen, CopyCheck } from 'lucide-react'
import { Separator } from './ui/separator'
 

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

    function onSubmit (input: Input){
        alert(JSON.stringify(input))
    }

    form.watch();

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
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Topic</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter a topic....." {...field} />
                        </FormControl>
                        <FormDescription>
                            Please provide a topic for the quiz
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Number of questions</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter an amount...."
                            {...field}
                            type='number'
                            min={1}
                            max={10}
                            onChange={e => {
                                form.setValue('amount', parseInt(e.target.value))
                            }}
                            />
                        </FormControl>
                        <FormDescription>
                            Please provide a topic for the quiz
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex justify-between">
                    <Button 
                        type="button" 
                        className="w-1/2 rounded-none rounded-l-lg"
                        variant={form.watch("type") === "mcq" ? "default" : "secondary"}
                        onClick={() => form.setValue("type", "mcq")} // <-- Fix: Set type to "mcq"
                    >
                        <CopyCheck className="w-4 h-4 mr-2" />
                        Multiple Choice
                    </Button>
                    <Separator orientation="vertical" />
                    <Button 
                        className="w-1/2 rounded-none rounded-r-lg"
                        type="button"
                        onClick={() => form.setValue("type", "fib")}
                        variant={form.watch("type") === "fib" ? "default" : "secondary"}
                    >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Fill in the blanks
                    </Button>
                </div>
                    <Button type="submit">Submit</Button>
                </form>
                </Form>

                
            </CardContent>
        </Card>
    </div>
  )
}

export default QuizCreation