import mongoose, { Document, model, Schema } from "mongoose";

interface UserData {
  fullname: string;
  email: string;
  password: string;
  stack: string;
  isAdmin: boolean;
}

interface DataSchema extends UserData, Document {}

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "please enter your fullname"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
      minlength: 6,
    },
    stack: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<DataSchema>("User", userSchema);

export default UserModel;
