import Link from 'next/link'

import { ICatalog } from '@/shared/types/catalog.interface'

import { ProductCard } from './ProductCard'

export function Catalog({
  title,
  description,
  linkTitle,
  link,
  products
}: ICatalog) {
  return (
    <div>
      <div className='mb-4 md:flex md:items-center md:justify-between'>
        <div className='max-w-2xl px-4 lg:max-w-full lg:px-0'>
          <h1 className='text-2xl font-bold'>{title}</h1>
          {description && (
            <p className='text-muted-foreground mt-2 text-sm'>{description}</p>
          )}
        </div>
        {link && linkTitle && (
          <Link
            className='hidden text-sm font-medium text-blue-600 hover:text-blue-600/90 md:flex'
            href={link}
          >
            {linkTitle}
          </Link>
        )}
      </div>
      <div className='flex w-full items-center'>
        <div className='grid w-full grid-cols-6 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:mt-2'>
          {products.length ? (
            products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div>Ничего не найдено</div>
          )}
        </div>
      </div>
    </div>
  )
}
