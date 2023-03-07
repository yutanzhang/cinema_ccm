import { createStore } from 'vuex'
import HomeModule from './modules/HomeModule'
import MovieModule from "./modules/MovieModule"
import CategoryModule from './modules/CategoryModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    HomeModule,
    MovieModule,
    CategoryModule
  }
})
