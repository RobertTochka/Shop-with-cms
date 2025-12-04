import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'

import { Sidebar } from '../Sidebar'

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className='pr-4 transition hover:opacity-75 lg:hidden'>
        <Menu />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='bg-white p-0'
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
