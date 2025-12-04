import { useGetStatistics } from '@/hooks/queries/satistics/useGetStatistics'

import { IMiddleStatistics } from '@/shared/types/statistics.interface'

import { LastUsers } from './LastUsers'
import { Overview } from './Overview'

const fakeMiddle: IMiddleStatistics = {
  monthlySales: [
    {
      date: '15 ноя',
      value: 152123
    },
    {
      date: '16 ноя',
      value: 216456
    },
    {
      date: '17 ноя',
      value: 354927
    },
    {
      date: '18 ноя',
      value: 258056
    },
    {
      date: '20 ноя',
      value: 193917
    },
    {
      date: '21 ноя',
      value: 279006
    },
    {
      date: '22 ноя',
      value: 361893
    }
  ],
  lastUsers: [
    {
      id: '36bfc8d4-dd22-45aa-a51d-ca77cd9bb966',
      name: 'Danil',
      email: 'danil@test.ru',
      picture: '/uploads/no-user-image.png',
      total: 123456
    },
    {
      id: '71aa4be3-84e2-421e-984a-513b4645ee0d',
      name: 'Kirill',
      email: 'kirill@test.ru',
      picture: '/uploads/no-user-image.png',
      total: 245683
    },
    {
      id: '36bfc8d4-dd22-45aa-a51d-ca77cddfghb966',
      name: 'Ivan',
      email: 'ivan@test.ru',
      picture: '/uploads/no-user-image.png',
      total: 342584
    },
    {
      id: '36bfc8d4-dd22-45aa-a51d-ca77csdfgjbb966',
      name: 'Egor',
      email: 'egor@test.ru',
      picture: '/uploads/no-user-image.png',
      total: 165234
    },
    {
      id: '36bfc8d4-dd22-45aa-a51d-ca7sgdfjd9bb966',
      name: 'Zhenek',
      email: 'zhenek@test.ru',
      picture: '/uploads/no-user-image.png',
      total: 124574
    }
  ]
}

export function MiddleStatistics() {
  const { middle } = useGetStatistics()

  return (
    <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
      {fakeMiddle?.monthlySales.length || fakeMiddle?.lastUsers.length ? (
        <>
          <div className='col-span-1 lg:col-span-3 xl:col-span-4'>
            <Overview data={fakeMiddle.monthlySales} />
          </div>
          <div className='col-span-1 lg:col-span-3'>
            <LastUsers data={fakeMiddle.lastUsers} />
          </div>
        </>
      ) : (
        <div>Нет данных для статистики</div>
      )}
    </div>
  )
}
