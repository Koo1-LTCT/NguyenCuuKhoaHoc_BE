import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  homeId: string;
  password: string;
}

export interface UserDocument extends User, Document {}

export const userSchema = new Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true, select: false },
  },
  { versionKey: false }
);

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
