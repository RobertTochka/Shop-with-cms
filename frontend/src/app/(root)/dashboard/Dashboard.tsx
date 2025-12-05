'use client'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/data-table/DataTable'

import { PUBLIC_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import { saveTokenStorage } from '@/services/auth/auth-token.service'
import { authService } from '@/services/auth/auth.service'

import { EnumOrderStatus } from '@/shared/types/order.interface'

import { formatDate } from '@/utils/data/format-date'
import { formatPrice } from '@/utils/string/format-price'

import { IOrderColumn, orderColumns } from './favorites/OrderColumns'

export function Dashboard() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { user } = useProfile()

  useEffect(() => {
    const accessToken = searchParams.get('accessToken')

    if (accessToken) {
      saveTokenStorage(accessToken)
    }
  }, [searchParams])

  const { mutate: logout } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess() {
      router.push(PUBLIC_URL.auth())
    }
  })

  if (!user) return null

  const formattedOrders: IOrderColumn[] = user.orders.map(order => ({
    createdAt: formatDate(order.createdAt),
    status: order.status === EnumOrderStatus.PENDING ? 'В ожидании' : 'Оплачен',
    total: formatPrice(order.total)
  }))

  return (
    <div className='my-6'>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Ваши заказы</h1>
        <Button
          variant='primary'
          onClick={() => logout()}
        >
          <LogOut className='mr-2 size-4' />
          Выйти
        </Button>
      </div>
      <DataTable
        columns={orderColumns}
        data={formattedOrders}
      />
    </div>
  )
}
