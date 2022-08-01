import { defineStore } from 'pinia'

export const useInitialStateStore = defineStore({
  chart: 'chart',
  cart:  'cart',
  userProfile: 'userProfile',
  notification: 'notification',
  // state
  state: () => ({
    chart: false,
    cart: false,
    userProfile: false,
    notification: false,
  }),
  //getters
  getters: {
    openChart: (state) => state.chart,
    openCart: (state) => state.cart,
    openProfile: (state) => state.userProfile,
    openNotification: (state) => state.notification,
  },
  //actions
  actions: {
    activeMenu() {
        this.openChart = true;
        this.openCart = true;
        this.openProfile = true;
        this.openNotification = true;
    }
  }
})
