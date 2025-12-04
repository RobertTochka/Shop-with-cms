'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Loader } from '@/components/ui/Loader'

import { DASHBOARD_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import { MobileSidebar } from '../sidebar/navigation/MobileSidebar'

import { StoreSwitcher } from './StoreSwitcher'

export function Header() {
  const { user, isLoading } = useProfile()

  return (
    <div className='flex h-full items-center gap-x-4 border-b bg-white p-6'>
      <MobileSidebar />
      <div className='ml-auto flex items-center gap-x-4'>
        {isLoading ? (
          <Loader size='sm' />
        ) : (
          user && (
            <>
              <StoreSwitcher items={user.stores} />
              <Link href={DASHBOARD_URL.home()}>
                <Image
                  className='rounded-full'
                  src={user.picture}
                  alt={user.name}
                  width={42}
                  height={42}
                />
              </Link>
            </>
          )
        )}
      </div>
    </div>
  )
}
