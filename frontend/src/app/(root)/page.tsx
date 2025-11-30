import { Metadata } from 'next'

import { Home } from './Home'

export const metadata: Metadata = {
  title: 'Ваш шопинг, ваше удовольствие - все в одном месте!'
}

export default function HomePage() {
  return <Home />
}
