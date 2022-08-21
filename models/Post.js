import mongoose, { Schema, model } from 'mongoose'

const postSchema = new Schema({
  visibility: {
    type: String,
    required: [true, 'Please provide a visibility'],
    enum: ['Public', 'Private', 'Draft'],
    default: 'Draft'
  },
  title: {
    type: String,
    required: [true, 'Please provide a title']
  },
  postPath: {
    type: String,
    required: [true, 'Please provide the post path']
  },
  author: {
    type: String,
    required: [true, 'Please provide the author']
  },
  date: {
    type: Date,
    required: [true, 'Please provide the date']
  },
  content: {
    type: String,
    required: [true, 'Please provide the content']
  },
  tags: {
    type: Array
  },
  urlImage: {
    type: String,
    required: [true, 'Please provide the url of image']
  },
  imageDescription: {
    type: String,
    required: [true, 'Please provide the image description']
  }

})

export default mongoose.models.Post || model('Post', postSchema)
