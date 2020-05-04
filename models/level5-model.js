const db = require('../data/dbconfig');

module.exports = {
    resources,
    addUser,
    lessons,
    addTask,
    task,
    findById
}

function addUser(User_ID) {
    return db('Level_5').insert(User_ID);
}

function lessons() {
    return db('UtoZ');
}

function findById(id) {
    return db('Level_5')
        .where({ id })
        .first();
}