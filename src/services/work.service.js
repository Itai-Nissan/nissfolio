import works from '../../data/work.json'

export default {
    loadWorks,
    getById,
}

function loadWorks() {
    return works
}

function getById(id) {
    return works.find(element => element._id === id)
}