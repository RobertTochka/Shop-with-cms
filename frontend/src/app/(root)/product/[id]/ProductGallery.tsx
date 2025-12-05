import Image from 'next/image'
import { useState } from 'react'

import { IProduct } from '@/shared/types/product.interface'

import { cn } from '@/utils/utils'

interface ProductGalleryProps {
  product: IProduct
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div>
      <Image
        className='rounded-lg'
        src={product.images[currentIndex]}
        alt={product.title}
        width={500}
        height={500}
      />
      <div className='mt-6 flex gap-6'>
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'overflow-hidden rounded-lg border duration-300',
              index === currentIndex ? 'border-black' : 'border-transparent'
            )}
          >
            <Image
              src={image}
              alt={product.title}
              width={100}
              height={100}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
