import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/Sheet'

import { PUBLIC_URL } from '@/config/url.config'

import { useCart } from '@/hooks/useCart'
import { useCheckout } from '@/hooks/useCheckout'
import { useProfile } from '@/hooks/useProfile'

import { formatPrice } from '@/utils/string/format-price'

import { CartItem } from './CartItem'

export function HeaderCart() {
  const router = useRouter()

  const { createPayment, isLoadingCreate } = useCheckout()
  const { user } = useProfile()

  const { items, total } = useCart()

  const handleClick = () => {
    user ? createPayment() : router.push(PUBLIC_URL.auth())
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost'>Корзина</Button>
      </SheetTrigger>
      <SheetTitle className='hidden'></SheetTitle>
      <SheetContent className='flex h-full flex-col'>
        <Heading
          title='Корзина товаров'
          className='text-xl'
        />
        <div className='flex w-full flex-1 flex-col'>
          {items.length ? (
            items.map(item => (
              <CartItem
                item={item}
                key={item.id}
              />
            ))
          ) : (
            <div className='text-muted-foreground text-sm'>Корзина пустая!</div>
          )}
        </div>
        {items.length ? (
          <>
            <div className='text-lg font-medium'>
              Итого к оплате: {formatPrice(total)}
            </div>
            <Button
              onClick={handleClick}
              variant='primary'
              disabled={isLoadingCreate}
              className='w-full'
            >
              Перейти к оплате
            </Button>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}
