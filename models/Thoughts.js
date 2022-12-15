const mongoose = require('mongoose');
const reactionsSchema =require('./Reactions.js')
// **Thought**:
const thoughtsSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt:{type:Date, default: Date.now},
    //use utils preset to do the getter method
    username:{ type:String, required: true },
    reactions:[reactionsSchema]
    
},
{
    toJSON:{
        getters:true,
        virtuals: true,
    },
    id:false,
}
)
const Thought= model('thought', thoughtsSchema )

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query



// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
module.exports = Thought;