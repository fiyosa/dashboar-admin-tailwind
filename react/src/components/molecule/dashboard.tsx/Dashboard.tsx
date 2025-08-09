import { Outlet } from 'react-router'
import ContentByDashboard from './ContentByDashboard'
import HeaderByDashboard from './HeaderByDashboard'
import SidebarByDashboard from './SidebarByDashboard'
import store from '../../../store' // sesuaikan path dan hook

export default function Dashboard() {
  const themeStore = store.themeStore()
  const sidebarStore = store.sidebarStore()

  return (
    <div
      className={`relative flex h-screen overflow-hidden ${
        themeStore.get === 'light'
          ? 'bg-[var(--background-color-light)] text-[var(--text-color-light)]'
          : 'bg-[var(--background-color-dark)] text-[var(--text-color-dark)]'
      }`}
    >
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-[3] h-full w-[230px] transform transition-transform duration-300 ease-in-out ${
          sidebarStore.get ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarByDashboard />
      </div>

      {/* Overlay */}
      {sidebarStore.get && (
        <div className="fixed inset-0 z-[2] bg-black opacity-50 sm:hidden" onClick={() => sidebarStore.toggle()}></div>
      )}

      {/* Main Content */}
      <div
        className={`flex h-full flex-1 flex-col transition-all duration-300 ease-in-out ${
          sidebarStore.get ? 'sm:ml-[230px]' : 'sm:ml-0'
        }`}
      >
        <HeaderByDashboard />
        <div className="flex-1 overflow-y-auto">
          <ContentByDashboard>
            <Outlet />
          </ContentByDashboard>
        </div>
      </div>
    </div>
  )
}
