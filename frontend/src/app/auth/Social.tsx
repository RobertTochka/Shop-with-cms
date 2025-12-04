'use client'
import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/Button'

import { SERVER_URL } from '@/config/api.config'

export function Social() {
  const router = useRouter()

  return (
    <div className='mt-5 w-full space-y-3'>
      <Button
        className='w-full cursor-pointer'
        variant='outline'
        onClick={() => router.push(`${SERVER_URL}/auth/google`)}
      >
        <FcGoogle className='mr-2 size-5' />
        Продолжить через Google
      </Button>
      <Button
        className='w-full cursor-pointer'
        variant='outline'
        onClick={() => router.push(`${SERVER_URL}/auth/yandex`)}
      >
        <FaYandex
          className='mr-2 size-5'
          color='#FC3F10'
        />
        Продолжить через Яндекс
      </Button>
    </div>
  )
}
