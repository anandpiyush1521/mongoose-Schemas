import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  name: {
    trpe: String, 
    required: true
  },
}, {timestamps: true});

export const Category = mongoose.model("Category", categorySchema); 