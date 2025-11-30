import { Metadata } from 'next'

import { Auth } from './Auth'

export const matadata: Metadata = {
  title: 'Авторизация'
}

export default function AuthPage() {
  return <Auth />
}
