import { HeaderMenu } from './header-menu/HeaderMenu'
import { Logo } from './Logo'
import { SearchInput } from './SearchInput'

export function Header() {
  return (
    <div className='flex h-full items-center gap-x-4 border-b bg-white p-5'>
      <Logo />
      <div className='ml-auto hidden w-[40%] lg:block'>
        <SearchInput />
      </div>
      <HeaderMenu />
    </div>
  )
}
