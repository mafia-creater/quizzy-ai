"use client"
import CustomerWordCloud from '@/components/CustomerWordCloud'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

const HotTopicsCard = (props: Props) => {
  return (
    <Card className='col-span-4'>
        <CardHeader>
            <CardTitle className='text-2xl font-bold'>
                Hot Topics
            </CardTitle>
            <CardDescription>
                Explore the latest trending topics
            </CardDescription>
        </CardHeader>
        <CardContent className='pl-2'>
            <CustomerWordCloud formattedTopics={[{ text: 'Example', value: 10 }]} />
        </CardContent>
    </Card>
  )
}

export default HotTopicsCard