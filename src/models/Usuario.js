import mongoose, { model, Schema } from 'mongoose'

const usuarioSchema = new Schema({
  userName: {
    type: String,
    required: [true, 'Please provide the usuario'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide the password']
  },
  firstName: {
    type: String,
    required: [true, 'Please provide the first name']
  },
  lastName: {
    type: String,
    required: [true, 'Please provide the last name']
  },
  description: {
    type: String,
    default: 'El autor no tiene descripcion'
  },
  userTwitter: {
    type: String,
    default: ''
  },
  userInstagram: {
    type: String,
    default: ''
  },
  userLinkedIn: {
    type: String,
    default: ''
  },
  posts: {
    type: [Schema.Types.ObjectId]
  }
})

export default mongoose.models.Usuario || model('Usuario', usuarioSchema)
