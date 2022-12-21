const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: currentDate => currentDate.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    },
    username:{
        type: String, 
        required: true
    } 
}, {
    toJSON: {
        getters: true,
    },
}
);

const Thought = model('thought', thoughtSchema)

module.exports = Thought