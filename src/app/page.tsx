import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SigninButton from '@/components/ui/SigninButton';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';

const Page = async() => {
  const session = await getAuthSession();
  if (session?.user){
    return redirect('/dashboard');
  }
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <Card className='w-[300px]'>
        <CardHeader>
          <CardTitle>
            Welcome to Quizzyy
            <CardDescription>
              A quiz app for everyone
            </CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SigninButton text='Sign in with Google' />

        </CardContent>
      </Card>
    </div>
  );
};

export default Page;