import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  // state
  state: () => ({
    counter: 0
  }),
  //getters
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  //actions
  actions: {
    increment() {
      this.counter++
    }
  }
})
