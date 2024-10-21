import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for persistence

const useLocationStore = create(
    persist(
        (set) => ({
            selectedLocation: null,
            selectedSector: null,

            // Action to set location and sector
            setLocation: (location, sector) => set({
                selectedLocation: location,
                selectedSector: sector,
            }),

            // Action to reset location and sector
            resetLocation: () => set({
                selectedLocation: null,
                selectedSector: null,
            }),
        }),
        {
            name: "location-storage", // Unique name for AsyncStorage key
            getStorage: () => AsyncStorage, // Use AsyncStorage for persistence
            // Ensure rehydration happens on app start
            partialize: (state) => ({ selectedLocation: state.selectedLocation, selectedSector: state.selectedSector }),
        }
    )
);

export default useLocationStore;
