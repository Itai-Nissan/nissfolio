import workService from '../../services/work.service'

export default {
  state: {
    work: Object,
    works: Array
  },
  getters: {
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

  },
  actions: {
    getWorks(context) {
      const works = workService.loadWorks()
      context.commit({ type: 'setStateWorks', works })
    },
    getWorkById(context, { id }) {
      const work = workService.getById(id)
      context.commit({ type: 'setStateWork', work })
    }
  },
};
