'use client'

import { LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Loader } from '@/components/ui/Loader'
import { CreateStoreModal } from '@/components/ui/modals/CreateStoreModal'

import { DASHBOARD_URL, PUBLIC_URL, STORE_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import { HeaderCart } from './HeaderCart'

export function HeaderMenu() {
  const { user, isLoading } = useProfile()

  return (
    <div className='ml-auto hidden items-center gap-x-2 lg:flex'>
      <HeaderCart />
      <Link href={PUBLIC_URL.explorer()}>
        <Button variant='ghost'>Каталог</Button>
      </Link>
      {isLoading ? (
        <Loader size='sm' />
      ) : user ? (
        <>
          <Link href={DASHBOARD_URL.favorites()}>
            <Button variant='ghost'>Избранное</Button>
          </Link>
          {user.stores.length ? (
            <Link href={STORE_URL.home(user.stores[0].id)}>
              <Button variant='ghost'>Мои магазины</Button>
            </Link>
          ) : (
            <CreateStoreModal>
              <Button variant='ghost'>Создать магазин</Button>
            </CreateStoreModal>
          )}
          <Link href={DASHBOARD_URL.home()}>
            <Image
              src={user.picture}
              alt={user.name}
              width={42}
              height={42}
              className='rounded-full'
            />
          </Link>
        </>
      ) : (
        <Link href={PUBLIC_URL.auth()}>
          <Button variant='primary'>
            <LogOut className='mr-2 size-4' />
            Войти
          </Button>
        </Link>
      )}
    </div>
  )
}
