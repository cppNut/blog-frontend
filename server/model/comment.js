import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },          //user name 
    postId: {
        type: String,
        required: true
    },      // what comment on what post id
    date: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
});


const comment = mongoose.model('comment', CommentSchema);

export default comment;