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
    return db('Level_3').insert(User_ID);
}

function lessons() {
    return db('KtoO');
}

function findById(id) {
    return db('Level_3')
        .where({ id })
        .first();
}