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
    return db('Level_2').insert(User_ID);
}

function lessons() {
    return db('FtoJ');
}

function findById(id) {
    return db('Level_2')
        .where({ id })
        .first();
}