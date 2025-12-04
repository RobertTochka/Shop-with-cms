import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { categoryService } from '@/services/category.service'

import { ICategoryInput } from '@/shared/types/category.interface'

export const useUpdateCategory = () => {
  const params = useParams<{ storeId: string }>()
  const { push } = useRouter()

  const queryClient = useQueryClient()

  const { mutate: updateCategory, isPending: isLoadingUpdate } = useMutation({
    mutationKey: ['update category'],
    mutationFn: (data: ICategoryInput) =>
      categoryService.update(data, params.storeId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['get categories for store dashboard']
      })
      toast.success('Категория обновлена')
      push(STORE_URL.categories(params.storeId))
    },
    onError() {
      toast.error('Ошибка при обновлении категории')
    }
  })

  return useMemo(
    () => ({
      updateCategory,
      isLoadingUpdate
    }),
    [updateCategory, isLoadingUpdate]
  )
}
