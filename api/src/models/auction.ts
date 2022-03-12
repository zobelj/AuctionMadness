import mongoose from 'mongoose'

const autionSchema = new mongoose.Schema({
    teams: [String],
    teamImgs: [String],
})