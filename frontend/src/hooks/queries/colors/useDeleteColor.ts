import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { colorService } from '@/services/color.service'

export const useDeleteColor = () => {
  const params = useParams<{ storeId: string }>()
  const { push } = useRouter()

  const queryClient = useQueryClient()

  const { mutate: deleteColor, isPending: isLoadingDelete } = useMutation({
    mutationKey: ['delete color'],
    mutationFn: () => colorService.delete(params.storeId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['get colors for store dashboard']
      })
      toast.success('Цвет удален')
      push(STORE_URL.colors(params.storeId))
    },
    onError() {
      toast.error('Ошибка при удалении цвета')
    }
  })

  return useMemo(
    () => ({
      deleteColor,
      isLoadingDelete
    }),
    [deleteColor, isLoadingDelete]
  )
}
