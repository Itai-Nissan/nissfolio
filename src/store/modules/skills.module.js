import skillService from '../../services/skills.service'

export default {
  state: {
    skills: Array,
  },
  getters: {
    skills(state) {
      return state.skills
    },

  },
  mutations: {
    setStateskills(state, { skills }) {
      state.skills = skills
    },
  },
  actions: {
    getSkills(context) {
      const skills = skillService.loadSkills()
      context.commit({ type: 'setStateskills', skills })
    },

  }
}

