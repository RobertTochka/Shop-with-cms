import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { colorService } from '@/services/color.service'

import { IColorInput } from '@/shared/types/color.interface'

export const useUpdateColor = () => {
  const params = useParams<{ storeId: string }>()
  const { push } = useRouter()

  const queryClient = useQueryClient()

  const { mutate: updateColor, isPending: isLoadingUpdate } = useMutation({
    mutationKey: ['update color'],
    mutationFn: (data: IColorInput) =>
      colorService.update(data, params.storeId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['get colors for store dashboard']
      })
      toast.success('Цвет обновлен')
      push(STORE_URL.colors(params.storeId))
    },
    onError() {
      toast.error('Ошибка при обновлении цвета')
    }
  })

  return useMemo(
    () => ({
      updateColor,
      isLoadingUpdate
    }),
    [updateColor, isLoadingUpdate]
  )
}
