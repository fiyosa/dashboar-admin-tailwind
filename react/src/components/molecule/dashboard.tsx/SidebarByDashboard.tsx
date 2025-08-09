import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import menu from '../../../config/menu'
import store from '../../../store'

export default function SidebarByDashboard() {
  const themeStore = store.themeStore()
  const sidebarStore = store.sidebarStore()
  const location = useLocation()

  const [openedMenu, setOpenedMenu] = useState<string[]>([])

  const toggleMenu = (name: string) => {
    setOpenedMenu((prev) => (prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]))
  }

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 640) {
      sidebarStore.toggle()
    }
  }

  return (
    <div
      className={`flex h-full w-full flex-col ${
        themeStore.get === 'light'
          ? 'bg-gray-100 text-[var(--text-color-light)]'
          : 'bg-gray-900 text-[var(--text-color-dark)]'
      }`}
    >
      {/* Sidebar Header (Logo) */}
      <div
        className={`flex h-16 w-full flex-shrink-0 items-center justify-center border-b ${
          themeStore.get === 'light' ? 'border-gray-200 bg-gray-100' : 'border-gray-700 bg-gray-900'
        }`}
      >
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>

      {/* Sidebar Navigation */}
      <div className="scrollbar-hide flex-grow overflow-y-auto p-3">
        <nav>
          <ul>
            {menu.map((item, index) => (
              <li key={index} className="mb-2">
                {/* Parent Menu */}
                {!item.children ? (
                  <Link
                    to={item.path}
                    className={`block rounded-md px-4 py-2 ${
                      location.pathname === item.path
                        ? themeStore.get === 'light'
                          ? 'bg-gray-200 font-semibold text-[var(--text-color-light)]'
                          : 'bg-gray-700 font-semibold text-[var(--text-color-dark)]'
                        : themeStore.get === 'light'
                          ? 'text-[var(--text-color-light)] hover:bg-gray-300'
                          : 'hover:bg-gray-200 hover:text-[var(--text-color-light)]'
                    }`}
                    onClick={handleCloseSidebar}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    {/* Parent with Children */}
                    <div
                      className={`flex cursor-pointer items-center justify-between rounded-md px-4 py-2 ${
                        themeStore.get === 'light'
                          ? 'text-[var(--text-color-light)] hover:bg-gray-300'
                          : 'hover:bg-gray-200 hover:text-[var(--text-color-light)]'
                      }`}
                      onClick={() => toggleMenu(String(item.name))}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`h-5 w-5 transform fill-current transition-transform ${
                          openedMenu.includes(String(item.name)) ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Child Menu */}
                    {openedMenu.includes(String(item.name)) && (
                      <ul
                        className={`mt-1 ml-4 border-l ${
                          themeStore.get === 'light' ? 'border-gray-300' : 'border-gray-600'
                        }`}
                      >
                        {item.children.map((child) => (
                          <li key={child.name} className="mb-1">
                            <Link
                              to={child.path}
                              className={`block rounded-md px-3 py-2 ${
                                location.pathname === child.path
                                  ? themeStore.get === 'light'
                                    ? 'bg-gray-200 font-semibold text-[var(--text-color-light)]'
                                    : 'bg-gray-700 font-semibold text-[var(--text-color-dark)]'
                                  : themeStore.get === 'light'
                                    ? 'text-[var(--text-color-light)] hover:bg-gray-300'
                                    : 'hover:bg-gray-200 hover:text-[var(--text-color-light)]'
                              }`}
                              onClick={handleCloseSidebar}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
