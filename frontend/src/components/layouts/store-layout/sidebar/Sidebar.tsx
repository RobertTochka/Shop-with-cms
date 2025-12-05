import { Logo } from '../../main-layout/header/Logo'

import { Navigation } from './navigation/Navigation'

export function Sidebar() {
  return (
    <div className='my-1 flex h-full flex-col overflow-y-auto border-r bg-neutral-50 px-5 pt-4'>
      <Logo />
      <Navigation />
    </div>
  )
}
