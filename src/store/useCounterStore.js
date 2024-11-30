const { create } = require("zustand");

const useCounterStore = create((set) => ({
  count: 3,
  resetCount: () => set({ count: 0 }),
  increaseCount: (amount) => set((state) => ({ count: state.count + amount })),
  decreaseCount: (amount) => set((state) => ({ count: state.count - amount })),
}));

export default useCounterStore;
