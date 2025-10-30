import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("login"))?.user || null,
  setUser: (userData) => {
    localStorage.setItem("login", JSON.stringify({ user: userData?.user }));
    set({ user: userData });
  },
}));
