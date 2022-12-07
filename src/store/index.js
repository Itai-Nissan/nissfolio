import { createStore } from 'vuex';
import workModule from './modules/work.module'
import skillsModule from './modules/skills.module'

const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    workModule,
    skillsModule,
  },
});

export default store;
