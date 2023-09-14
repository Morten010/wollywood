import { create } from 'zustand'

type User = {
    firstname: string
    lastname: string
    email: string
    access_token: string
}

interface BearState {
    user: null | User,
    setLogin: (x: User) => void,
    removeLogin: () => void,
  }

export const useLogin = create<BearState>()((set) => ({
    user: null,
    setLogin: (user) => set((state) => ({ 
       user: user
    })),
    removeLogin: () => set({  
        user: null
    }),
}))