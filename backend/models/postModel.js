const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postcapt : String,
    postloc :String,
    postimg: String,
    profileimg: {
        type: String,
    },
    likes:[{
        type:Array,
        default: [],
    }],
    comments: [{
        type: Array,
        default: []
    }],
    postedby: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    postdob:{
        type: Date,
        default:  Date.now()
    }
});

module.exports = mongoose.model('post', postSchema);



