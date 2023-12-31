import mongoose from 'mongoose';

//user schema, {}=>object
const userScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      //required: [true, "password is required"],
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userScheme);
