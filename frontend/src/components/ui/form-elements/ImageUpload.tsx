import { ImagePlus } from 'lucide-react'
import Image from 'next/image'

import { useUpload } from '@/hooks/useUpload'

import { cn } from '@/utils/utils'

import { Button } from '../Button'

interface ImageUploadProps {
  isDisabled: boolean
  onChange: (value: string[]) => void
  values: string[]
}

export function ImageUpload({
  isDisabled,
  onChange,
  values
}: ImageUploadProps) {
  const { handleButtonClick, isUploading, fileInputRef, handleFileChange } =
    useUpload(onChange)

  return (
    <div>
      <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6'>
        {values.map(url => (
          <div
            key={url}
            className='relative h-[200px] w-[200px] overflow-hidden rounded-md'
          >
            <Image
              className='object-cover'
              src={url}
              alt='Картинка'
              fill
            />
          </div>
        ))}
      </div>
      <Button
        type='button'
        disabled={isDisabled || isUploading}
        variant='secondary'
        onClick={handleButtonClick}
        className={values?.length ? 'mt-4' : ''}
      >
        <ImagePlus className='mr-2 size-4' />
        Загрузить картинки
      </Button>
      <input
        type='file'
        multiple
        className='hidden'
        ref={fileInputRef}
        onChange={handleFileChange}
        disabled={isDisabled}
      />
    </div>
  )
}
