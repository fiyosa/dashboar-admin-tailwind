import type { ReactNode } from 'react'
import store from '../../../store'

interface Props {
  children: ReactNode
}

export default function ContentByDashboard({ children }: Props) {
  const themeStore = store.themeStore()

  return (
    <div
      className={`p-3 ${
        themeStore.get === 'light'
          ? 'bg-[var(--background-color-light)] text-[var(--text-color-light)]'
          : 'bg-[var(--background-color-dark)] text-[var(--text-color-dark)]'
      }`}
    >
      {children}
    </div>
  )
}
