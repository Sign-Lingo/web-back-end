const db = require('../data/dbconfig');

module.exports = {
    resources,
    addUser,
    lessons,
    addTask,
    task,
    findById
}



// function resources() {
//     return db('resources');
// }

function addUser(User_ID) {
    return db('Level_1').insert(User_ID);
}

function lessons() {
    return db('AtoE');
}

function findById(id) {
    return db('Level_1')
        .where({ id })
        .first();
}

// function addTask(task) {
//     return db('tasks').insert(task);
// }

// function task(id) {
//     return db('projects')
//     .select('*')
//       .join('tasks', 'tasks.projects_id', 'projects.id')
//       .where({ projects_id: id });
// }