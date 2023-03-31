import create from "zustand";
import { persist } from "zustand/middleware";

const userStore = create(persist(
  (set) => ({
    users: [],
    addUser: (user) =>
      set((state) => ({
        users: [...state.users, user],
      })),
    removeUser: () =>
      set((state) => ({
        users: [],
      })),
  }),
  {
    name: "userStore", // name for the storage key
    getStorage: () => localStorage, // use localStorage for persistence
  }
));

export default userStore;
