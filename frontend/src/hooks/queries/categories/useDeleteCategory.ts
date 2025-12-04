import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { categoryService } from '@/services/category.service'

export const useDeleteCategory = () => {
  const params = useParams<{ storeId: string }>()
  const { push } = useRouter()

  const queryClient = useQueryClient()

  const { mutate: deleteCategory, isPending: isLoadingDelete } = useMutation({
    mutationKey: ['delete category'],
    mutationFn: () => categoryService.delete(params.storeId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['get categories for store dashboard']
      })
      toast.success('Категория удалена')
      push(STORE_URL.categories(params.storeId))
    },
    onError() {
      toast.error('Ошибка при удалении категории')
    }
  })

  return useMemo(
    () => ({
      deleteCategory,
      isLoadingDelete
    }),
    [deleteCategory, isLoadingDelete]
  )
}
