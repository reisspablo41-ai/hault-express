import { create } from 'zustand';

const useTrackingStore = create((set) => ({
  position: null,
  currentIndex: 0,
  isPaused: false,
  setPosition: (position) => set({ position }),
  setCurrentIndex: (index) => set({ currentIndex: index }),
  setPaused: (paused) => set({ isPaused: paused }),
  restartAnimation: () =>
    set({
      position: null,
      currentIndex: 0,
      isPaused: false,
    }),
}));

export default useTrackingStore;
