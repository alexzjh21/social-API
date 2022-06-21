const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, 
{
    toJSON: {
        virtuals: true,
    },
    id: false
});

UserSchema.virtual('thoughtCount').get(function () {
    return this.thoughts.reduce((total, thought) => total + thought.reactions.length + 1, 0);
})

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;