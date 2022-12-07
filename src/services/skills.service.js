import skills from '../../data/skills.json'

export default {
    loadSkills,
    getById,
}

function loadSkills() {
    return skills
}

function getById(id) {
    return skills.find(element => element._id === id)
}