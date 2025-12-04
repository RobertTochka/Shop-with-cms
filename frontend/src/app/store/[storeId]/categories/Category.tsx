'use client'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/data-table/DataTable'
import { DataTableLoading } from '@/components/ui/data-table/DataTableLoading'
import { Heading } from '@/components/ui/Heading'

import { STORE_URL } from '@/config/url.config'

import { useGetCategories } from '@/hooks/queries/categories/useGetCategories'

import { formatDate } from '@/utils/data/format-date'

import { categoryColumns, ICategoryColumn } from './CategoryColumns'

export function Categories() {
  const params = useParams<{ storeId: string }>()

  const { categories, isLoading } = useGetCategories()

  const formattedCategories: ICategoryColumn[] = categories
    ? categories.map(category => ({
        id: category.id,
        createdAt: formatDate(category.createdAt),
        title: category.title,
        storeId: category.storeId
      }))
    : []

  return (
    <div className='p-6'>
      {isLoading ? (
        <DataTableLoading />
      ) : (
        <>
          <div className='flex items-center justify-between'>
            <Heading
              title={`Категории (${categories?.length})`}
              description='Все категории нашего магазина'
            />
            <div className='flex items-center gap-x-4'>
              <Link href={STORE_URL.categoryCreate(params.storeId)}>
                <Button variant='primary'>
                  <Plus className='mr-2' />
                  Создать
                </Button>
              </Link>
            </div>
          </div>
          <div className='mt-3'>
            <DataTable
              columns={categoryColumns}
              data={formattedCategories}
              filterKey='title'
            />
          </div>
        </>
      )}
    </div>
  )
}
