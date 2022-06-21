const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema ({
    
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 200
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
});

module.exports = ReactionSchema;