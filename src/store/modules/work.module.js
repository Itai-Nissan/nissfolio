import workService from '../../services/work.service'

export default {
  state: {
    work: Object,
    works: Array,
    navClass: String
  },
  getters: {
    currentNavClass(state){
      return state.navClass
    },
    work(state) {
      return state.work
    },
    works(state) {
      return state.works
    },
  },
  mutations: {
    setStateWork(state, { work }) {
      state.work = work
    },
    setStateWorks(state, { works }) {
      state.works = works
    },
    setNavStateClass(state, { navClass }) {
      state.navClass = navClass
    },

  },
  actions: {
    getWorks(context) {
      const works = workService.loadWorks()
      context.commit({ type: 'setStateWorks', works })
    },
    getWorkById(context, { id }) {
      const work = workService.getById(id)
      context.commit({ type: 'setStateWork', work })
    },
    setNavClass(context, {navClass}){
      context.commit({ type: 'setNavStateClass', navClass })
    }
  },
};
