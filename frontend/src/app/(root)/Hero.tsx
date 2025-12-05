import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'

import { PUBLIC_URL } from '@/config/url.config'

import { SITE_DESCRIPTION } from '@/constants/seo.constants'

export function Hero() {
  return (
    <div className='mx-auto my-24 flex max-w-4xl flex-col items-center space-y-6 py-20 text-center'>
      <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>
        Ваш шопинг, ваше удовольствие -{' '}
        <span className='text-blue-600'>все в одном месте</span>
      </h1>
      <p className='text-muted-foreground text-lg'>{SITE_DESCRIPTION}</p>
      <Link href={PUBLIC_URL.explorer()}>
        <Button
          className='transition-all hover:gap-3'
          variant='primary'
        >
          За покупками
          <ArrowRight className='ml-2 size-4' />
        </Button>
      </Link>
    </div>
  )
}
