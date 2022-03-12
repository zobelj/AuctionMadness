import mongoose from 'mongoose'
import { UserDocument } from './types/user';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

export default mongoose.model<UserDocument>("User", userSchema);