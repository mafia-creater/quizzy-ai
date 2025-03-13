import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
    </Card>
  )
}

export default HotTopicsCard