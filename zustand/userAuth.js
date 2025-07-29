// stores/useAuthStore.js
import { create } from 'zustand';

const useAuthStore = create((set) => ({
    name: null,
    email: null,
    isNewUser: false,
    setUserInfo: (name, email, isNewUser) =>
        set({ name, email, isNewUser }),
    setIsNewUser: (isNew) => set({ isNewUser: isNew }), // <--- ADD THIS
    clearUserInfo: () => set({ name: null, email: null, isNewUser: false }),
    logout: async () => { },
    setLogoutFunction: (logoutFn) => set({ logout: logoutFn }),
}));

export default useAuthStore;

