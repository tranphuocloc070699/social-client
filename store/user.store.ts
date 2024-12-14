import { UserDto } from "@/types/user/user.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { dummyUser } from "@/types/user/user.data";

interface UserStore {
  user: UserDto;
  isAuthenticated: boolean;
  setUser: (user: UserDto) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: dummyUser,
      isAuthenticated: false,
      setUser: (user: UserDto) =>
        set(() => ({
          user,
          isAuthenticated: true,
        })),
      logout: () =>
        set(() => ({
          user: dummyUser,
          isAuthenticated: false,
        })),
    }),
    {
      name: "user-storage", // LocalStorage key
    }
  )
);
