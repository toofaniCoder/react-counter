import { proxy } from 'valtio';

const store = proxy({
  counter: 11,
});

// actions
export const increaseCounter = () => ++store.counter;
export const decreaseCounter = () => --store.counter;
export const increaseBy = (by) => (store.counter += by);
export const decreaseBy = (by) => (store.counter -= by);
export const reset = () => (store.counter = 0);

export default store;
