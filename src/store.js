import create from 'zustand';

const useStore = create(() => ({
  counter: 0,
}));

export default useStore;
