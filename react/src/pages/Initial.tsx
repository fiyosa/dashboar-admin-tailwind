import { useEffect } from 'react'
import { Outlet } from 'react-router'
import store from '../store'

export default function Initial() {
  const sidebarStore = store.sidebarStore()

  useEffect(() => {
    if (window.innerWidth <= 640 && sidebarStore.get) {
      sidebarStore.set(false)
    }
  }, [])

  return <Outlet />
}
