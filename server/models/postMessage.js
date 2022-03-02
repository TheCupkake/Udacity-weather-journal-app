import mongoose from 'mongoose';
import createDomPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import {marked} from 'marked';
const dompurify = createDomPurify(new JSDOM().window)

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    content: String,
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    sanitizedHtml: String
});

postSchema.pre('validate', function(next) {
    
    this.sanitizedHtml = dompurify.sanitize(marked(this.content))

    next()
})



const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage