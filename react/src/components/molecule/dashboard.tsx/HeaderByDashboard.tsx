import store from '../../../store'
import { IconTheme } from '../../atom'

export default function HeaderByDashboard() {
  const sidebarStore = store.sidebarStore()
  const themeStore = store.themeStore()

  return (
    <div
      className={`relative z-[4] flex h-16 w-full flex-shrink-0 items-center justify-between border-b px-4 ${
        themeStore.get === 'light'
          ? 'border-gray-200 bg-[var(--background-color-light)]'
          : 'border-gray-700 bg-[var(--background-color-dark)]'
      }`}
    >
      <div className="flex items-center">
        {/* Sidebar toggle button */}
        <button
          className={`rounded-full p-2 ${
            themeStore.get === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700 hover:text-[var(--text-color-light)]'
          }`}
          onClick={() => sidebarStore.toggle()}
        >
          {!sidebarStore.get ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={
                themeStore.get === 'light' ? 'fill-[var(--text-color-light)]' : 'fill-[var(--text-color-dark)]'
              }
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={
                themeStore.get === 'light' ? 'fill-[var(--text-color-light)]' : 'fill-[var(--text-color-dark)]'
              }
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          )}
        </button>

        {/* Page Title */}
        <div
          className={`ml-2 text-xl font-semibold ${
            themeStore.get === 'light' ? 'text-[var(--text-color-light)]' : 'text-[var(--text-color-dark)]'
          }`}
        >
          {/* {pageTitle} */}
        </div>
      </div>

      {/* Theme Toggle Icon */}
      <IconTheme />
    </div>
  )
}
