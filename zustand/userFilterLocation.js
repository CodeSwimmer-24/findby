import { create } from 'zustand';

const useLocationStore = create((set) => ({
    city: null,
    location: null,
    exactLocation: null,
    isModalVisible: false,

    setCity: (city) => set({ city }),
    setLocation: (location) => set({ location }),
    setExactLocation: (exactLocation) => set({ exactLocation }),

    toggleModal: () =>
        set((state) => ({
            isModalVisible: state.location !== null ? !state.isModalVisible : false,
        })),

    forceOpenModal: () => set({ isModalVisible: true }),
    closeModal: () => set({ isModalVisible: false }),
}));

export default useLocationStore;
