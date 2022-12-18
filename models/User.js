const { Schema, model, default: mongoose } = require('mongoose');


const usersSchema = new mongoose.Schema({
    username: {
        type: String, unique: true, required: true, trim: true
    },
    email: {
        type: String, unique: true, required: true,
    },
    //   * Must match a valid email address (look into Mongoose's matching validation)
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thoughts"
        }

    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]

},
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    })
const User = model('user', usersSchema)


// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.


module.exports = User;