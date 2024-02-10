import { create } from 'zustand'

export const useProductStore = create((set) => ({
  product_store : null,
  addProduct: (product_store) => set((state) => ({ product_store })),
  removeAllBears: () => set({ bears: 0 }),
}))