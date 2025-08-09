import { create } from 'zustand'

type IGet = boolean

const init: IGet = true

interface ICreate {
  get: IGet
  set: (e: IGet) => void
  toggle: () => void
  init: () => void
}

export const sidebarStore = create<ICreate>((set) => ({
  get: init,
  set: (e) => set(() => ({ get: e })),
  toggle: () => set((state) => ({ get: !state.get })),
  init: () => set(() => ({ get: init })),
}))
