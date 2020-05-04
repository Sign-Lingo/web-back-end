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
    return db('Level_4').insert(User_ID);
}

function lessons() {
    return db('PtoT');
}

function findById(id) {
    return db('Level_4')
        .where({ id })
        .first();
}