// considered as controller 

const express = require('express')
const router = express.Router()

// Topic model
const Topic = require('../../models/Topic')

// @route GET api/topics
// @desc GET all topic
// @access public
router.get('/', (req, res) => {
  Topic
    .find()
    .sort({ date: -1 })
    .then(topics => res.json(topics))
})

// @route POST api/topics
// @desc create a topic
// @access public
router.post('/', (req, res) => {
  const newTopic = new Topic({
    title: req.body.title,
    flashcards: req.body.flashcards
  })

  newTopic
    .save()
    .then(topics => res.json(topics))
})

// @route Delete api/topics/:id
// @desc Delete a topic
// @access public
router.delete('/:id', (req, res) => {
  Topic.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ id: req.params.id })))
    .catch(err => res.status(404).json({ success: false }))
})

// @route Get api/topics/:id
// @desc get a topic
// @access public
router.get('/:id', (req, res) => {
  Topic.findById(req.params.id)
    .then(topic => res.json(topic))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router