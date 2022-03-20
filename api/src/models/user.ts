import mongoose from 'mongoose'
import { UserDocument } from './types/user';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        salt: String,
        hash: String,
        iterations: Number,
        keyLength: Number,
        digest: String,
        hashFormat: String,
    },
})

export default mongoose.model<UserDocument>("User", userSchema);