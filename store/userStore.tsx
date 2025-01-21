import { create } from 'zustand';

interface userState {
  isLogin: boolean;
}

export const userStore = create<userState>()((set) => ({
  isLogin: false,
}));
