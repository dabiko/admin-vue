import { defineStore } from 'pinia'

export const useMenuStateStore = defineStore({
  id: 'menu',
  // state
  state: () => ({
    menu: false,
  }),
  //getters
  getters: {
    openMenu: (state) => state.menu,
  },
  //actions
  actions: {
    activeMenu() {
        this.menu = true;
    }
  }
})
