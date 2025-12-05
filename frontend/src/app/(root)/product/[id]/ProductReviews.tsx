import { Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'

import { Button } from '@/components/ui/Button'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'
import { ReviewModal } from '@/components/ui/modals/ReviewModal'

import { useDeleteReview } from '@/hooks/queries/reviews/useDeleteReview'
import { useProfile } from '@/hooks/useProfile'

import { IProduct } from '@/shared/types/product.interface'

interface ProductReviewsProps {
  product: IProduct
}

export function ProductReviews({ product }: ProductReviewsProps) {
  const { user } = useProfile()

  const { deleteReview } = useDeleteReview()

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Отзывы</h1>
        {user && (
          <ReviewModal storeId={product.storeId}>
            <Button variant='ghost'>
              <Plus className='mr-2 size-4' />
              Добавить отзыв
            </Button>
          </ReviewModal>
        )}
      </div>
      <div className='mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
        {product.reviews.length ? (
          product.reviews.map(review => (
            <div
              className='rounded-lg border p-4'
              key={review.id}
            >
              <div className='flex justify-between'>
                <div className='flex items-center gap-x-4 font-medium'>
                  <Image
                    className='rounded-full'
                    src={review.user.picture}
                    alt={review.user.name}
                    width={40}
                    height={40}
                  />
                  {review.user.name}
                </div>
                {review.user.id === user?.id && (
                  <ConfirmModal handleClick={() => deleteReview(review.id)}>
                    <button className='-mt-3 text-red-500'>
                      <Trash className='size-5' />
                    </button>
                  </ConfirmModal>
                )}
              </div>
              <Rating
                readonly
                initialValue={review.rating}
                SVGstyle={{ display: 'inline-block' }}
                size={18}
                allowFraction
                transition
              />
              <div className='text-muted-foreground mt-1 text-sm'>
                {review.text}
              </div>
            </div>
          ))
        ) : (
          <div className='mt-4'>У этого товара нет отзывов</div>
        )}
      </div>
    </>
  )
}
