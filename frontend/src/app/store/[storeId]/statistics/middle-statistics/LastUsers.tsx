import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

import { ILastUser } from '@/shared/types/statistics.interface'

import { formatPrice } from '@/utils/string/format-price'

interface LastUsersProps {
  data: ILastUser[]
}

export function LastUsers({ data }: LastUsersProps) {
  return (
    <Card>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-4'>
        <CardTitle className='line-clamp-1 text-xl font-medium tracking-[0.1px]'>
          Прибыль
        </CardTitle>
      </CardHeader>
      <CardContent>
        {data?.length ? (
          data.map(user => (
            <div
              key={user.id}
              className='mt-5 flex items-center'
            >
              <Image
                className='rounded-full'
                src={user.picture}
                alt={user.name}
                width={40}
                height={40}
              />
              <div className='text-muted-foreground ml-4 space-y-1 text-sm'>
                <p className='leading-none font-medium text-black'>
                  {user.name}
                </p>
                <p>{user.email}</p>
              </div>
              <div className='ml-auto font-medium'>
                +{formatPrice(user.total)}
              </div>
            </div>
          ))
        ) : (
          <div>{'У этого магазина нет покупателей :('}</div>
        )}
      </CardContent>
    </Card>
  )
}
