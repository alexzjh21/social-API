const router = require('express').Router();

const { getAllThought,
        getThoughtById,
        addThought,
        removeThought,
        updateThought,
        addReaction,
        removeReaction, 
        deleteThought
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getAllThought);

router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router
.route('/:userId')
.post(addThought);

router
.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

router
.route('/:userId/:thoughtId/:reactionId')
.delete(removeReaction);

module.exports = router;