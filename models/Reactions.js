const mongoose = require('mongoose');
// **Reaction** (SCHEMA ONLY)


const reactionsSchema = new mongoose.Schema({
    reactionBody: { type: String, required: true, maxLength: 280 },
    createdAt:{type:Date, default: Date.now},
    //use utils preset to do the getter method
    username:{ type:String, required: true },
    
    
},
{
    toJSON:{
        getters:true,
        virtuals: true,
    },
    id:false,
}
)




//   * Use a getter method to format the timestamp on query

// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
module.exports = reactionsSchema;