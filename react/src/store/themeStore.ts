import { create } from 'zustand'

type IGet = 'light' | 'dark'

const init: IGet = 'light'

interface ICreate {
  get: IGet
  set: (e: IGet) => void
  init: () => void
}

export const themeStore = create<ICreate>((set) => ({
  get: init,
  set: (e) => set(() => ({ get: e })),
  init: () => set(() => ({ get: init })),
}))
