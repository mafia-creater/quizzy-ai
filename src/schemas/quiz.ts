import {z} from 'zod';

export const quizCreationSchema = z.object({
    topic: z.string().min(4, {message: 'Topic must be at least 4 characters long'}),
    type: z.enum(['mcq', 'fib']),
    amount: z.number().min(1, {message: 'Amount must be at least 1'}).max(10)
})