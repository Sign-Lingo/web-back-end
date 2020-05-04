const router = require('express').Router();

const Lessons = require('../models/level1-model.js');

router.get('/lesson',  (req, res) => {
    Lessons.lessons()
        .then( data => {
            res.status(200).json(data);
        })
        .catch( error => {
            res.status(500).json({ message: 'Failed to find the data'})
        })
})

router.get('/practice',  (req, res) => {
    Lessons.lessons()
        .then( data => {
            res.status(200).json(data);
        })
        .catch( error => {
            res.status(500).json({ message: 'Failed to find the data'})
        })
})

router.get('/quiz',  (req, res) => {
    Lessons.lessons()
        .then( data => {
            res.status(200).json(data);
        })
        .catch( error => {
            res.status(500).json({ message: 'Failed to find the data'})
        })
})

router.post('/', (req, res) => {
    const lessonData = req.body;

        Lessons.addUser(lessonData)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(error => {
                res.status(500).json({ message: 'Failed to create new user'})
        })
})

