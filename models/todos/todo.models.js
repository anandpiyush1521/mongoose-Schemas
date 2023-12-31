import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  content:{
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodos: [  //Array
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    } 
  ],// Arrays of subtodos
}, {timestamps: true});

export const Todo = mongoose.model('Tood', todoSchema);