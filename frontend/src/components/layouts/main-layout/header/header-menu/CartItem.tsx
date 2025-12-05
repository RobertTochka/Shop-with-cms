import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import { ICartItem } from '@/shared/types/cart.interface'

import { formatPrice } from '@/utils/string/format-price'

import { CartActions } from './CartActions'

interface CartItemProps {
  item: ICartItem
}

export function CartItem({ item }: CartItemProps) {
  return (
    <div className='mb-5 flex items-center'>
      <Link
        href={PUBLIC_URL.product(item.product.id)}
        className='relative h-28 w-28 overflow-hidden rounded-md'
      >
        <Image
          src={item.product.images[0]}
          alt={item.product.title}
          fill
          className='object-cover'
        />
      </Link>
      <div className='ml-6'>
        <h2 className='line-clamp-1 font-medium'>{item.product.title}</h2>
        <p className='text-muted-foreground mt-1 text-sm'>
          {formatPrice(item.product.price)}
        </p>
        <CartActions item={item} />
      </div>
    </div>
  )
}
