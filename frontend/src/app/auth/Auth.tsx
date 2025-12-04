'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import { Form } from '@/components/ui/form-elements/Form'

import { AuthFields } from './AuthFields'
import { Social } from './Social'
import { useAuthForm } from './useAuthForm'

export function Auth() {
  const [isReg, setIsReg] = useState<boolean>(false)

  const { onSubmit, form, isPending } = useAuthForm(isReg)

  return (
    <div className='grid min-h-screen grid-cols-1 lg:grid-cols-2'>
      <div className='hidden h-full items-center justify-center bg-blue-600 lg:flex'>
        <Image
          src='/images/auth.svg'
          alt='ShopWithCms auth'
          width={100}
          height={100}
        />
      </div>
      <div className='flex h-full flex-col items-center justify-center'>
        <Card className='flex w-[380px] flex-col items-center justify-center border-none p-6'>
          <CardHeader className='pb-5 text-center'>
            <CardTitle className='pb-1 text-3xl font-bold'>
              {isReg ? 'Создать аккаунт' : 'Войти в аккаунт'}
            </CardTitle>
            <CardDescription>
              Войдите или создайте учетную запись, чтобы оформлять покупки!
            </CardDescription>
          </CardHeader>
          <CardContent className='w-full p-0'>
            <Form {...form}>
              <form
                className='space-y-5'
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <AuthFields
                  form={form}
                  isPending={isPending}
                  isReg={isReg}
                />
                <Button
                  className='w-full cursor-pointer'
                  disabled={isPending}
                >
                  Продолжить
                </Button>
              </form>
            </Form>
            <Social />
          </CardContent>
          <CardFooter className='text-muted-foreground mt-4 p-0 text-sm'>
            {isReg ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}
            <button
              className='ml-1 cursor-pointer text-sky-500'
              onClick={() => setIsReg(!isReg)}
            >
              {isReg ? 'Войти' : 'Создать'}
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
