import create from 'zustand';

const useStore = create((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
  increaseBy: (num) => set((state) => ({ counter: state.counter + num })),
  decreaseBy: (num) => set((state) => ({ counter: state.counter - num })),
}));

export default useStore;
