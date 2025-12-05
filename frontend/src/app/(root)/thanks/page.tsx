import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'

import { PUBLIC_URL } from '@/config/url.config'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Спасибо за покупку',
  ...NO_INDEX_PAGE
}

export default function ThanksPage() {
  return (
    <div className='mx-auto my-24 flex max-w-4xl flex-col items-center space-y-6 py-20 text-center'>
      <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>
        Спасибо за покупку
      </h1>
      <p className='text-muted-foreground text-lg'>
        Спасибо за ваш заказ! Мы ценим ваше доверие и приложим все усилия, чтобы
        доставить ваш заказ как можно скорее.
      </p>
      <Link href={PUBLIC_URL.home()}>
        <Button
          className='transition-all hover:gap-3'
          variant='primary'
        >
          На главную
          <ArrowRight className='ml-2 size-4' />
        </Button>
      </Link>
    </div>
  )
}
