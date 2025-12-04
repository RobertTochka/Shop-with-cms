'use client'
import { Trash } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form-elements/Form'
import { Input } from '@/components/ui/form-elements/Input'
import { Heading } from '@/components/ui/Heading'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'
import { Textarea } from '@/components/ui/Textarea'

import { useDeleteStore } from '@/hooks/queries/stores/useDeleteStore'
import { useUpdateStore } from '@/hooks/queries/stores/useUpdateStore'

import { IStoreEdit } from '@/shared/types/store.interface'

export function Settings() {
  const { store, updateStore, isLoadingUpdate } = useUpdateStore()
  const { deleteStore, isLoadingDelete } = useDeleteStore()

  const form = useForm<IStoreEdit>({
    mode: 'onChange',
    values: {
      title: store?.title || '',
      description: store?.description || ''
    }
  })

  const onSubmit: SubmitHandler<IStoreEdit> = data => {
    updateStore(data)
  }

  return (
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <Heading
          title='Настройки'
          description='Управление настройками магазина'
        />
        <ConfirmModal handleClick={() => deleteStore()}>
          <Button
            size='icon'
            variant='primary'
            disabled={isLoadingDelete}
          >
            <Trash className='size-4' />
          </Button>
        </ConfirmModal>
      </div>
      <Form {...form}>
        <form
          className='h-full space-y-6'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            <FormField
              control={form.control}
              name='title'
              rules={{
                required: 'Название обязательно'
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Название магазина'
                      disabled={isLoadingUpdate}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Описание магазина'
                    disabled={isLoadingUpdate}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant='primary'
            disabled={isLoadingUpdate}
          >
            Сохранить
          </Button>
        </form>
      </Form>
    </div>
  )
}
// flex items-center gap-x-4
