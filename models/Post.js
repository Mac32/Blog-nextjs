import mongoose, { Schema, model } from 'mongoose'
import Usuario from 'models/Usuario'

Usuario

const postSchema = new Schema({
  visibility: {
    type: String,
    required: [true, 'Please provide a visibility'],
    enum: ['Public', 'Private', 'Draft'],
    default: 'Draft'
  },
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    unique: true
  },
  postPath: {
    type: String,
    required: [true, 'Please provide the post path of publication'],
    unique: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
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
  summary: {
    type: String,
    required: [true, 'Please provide the summary']
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
