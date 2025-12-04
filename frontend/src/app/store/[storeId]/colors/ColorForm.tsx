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

import { useCreateColor } from '@/hooks/queries/colors/useCreateColor'
import { useDeleteColor } from '@/hooks/queries/colors/useDeleteColor'
import { useUpdateColor } from '@/hooks/queries/colors/useUpdateColor'

import { IColor, IColorInput } from '@/shared/types/color.interface'

interface ColorFormProps {
  color?: IColor
}

export function ColorForm({ color }: ColorFormProps) {
  const { createColor, isLoadingCreate } = useCreateColor()
  const { updateColor, isLoadingUpdate } = useUpdateColor()
  const { deleteColor, isLoadingDelete } = useDeleteColor()

  const title = color ? 'Изменить данные' : 'Создать цвет'
  const description = color
    ? 'Изменить данные о цвете'
    : 'Добавить новый цвет в магазин'
  const action = color ? 'Сохранить' : 'Создать'

  const form = useForm<IColorInput>({
    mode: 'onChange',
    values: {
      name: color?.name || '',
      value: color?.value || ''
    }
  })

  const onSubmit: SubmitHandler<IColorInput> = data => {
    if (color) updateColor(data)
    else createColor(data)
  }

  return (
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <Heading
          title={title}
          description={description}
        />
        {color && (
          <ConfirmModal handleClick={() => deleteColor()}>
            <Button
              size='icon'
              variant='primary'
              disabled={isLoadingDelete}
            >
              <Trash className='size-4' />
            </Button>
          </ConfirmModal>
        )}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            <FormField
              control={form.control}
              name='name'
              rules={{
                required: 'Название обязательно'
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Название цвета'
                      disabled={isLoadingCreate || isLoadingUpdate}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='value'
              rules={{
                required: 'Значение обязательно'
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Значение</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Значение цвета'
                      disabled={isLoadingCreate || isLoadingUpdate}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className='mt-4'
            variant='primary'
            disabled={isLoadingCreate || isLoadingUpdate}
          >
            {action}
          </Button>
        </form>
      </Form>
    </div>
  )
}
