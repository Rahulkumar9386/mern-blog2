import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        reuired: true,
        unique: true,
    },
    email: {
        type: String,
        reuired: true,
        unique: true,

    },
    password: {
        type: Number,
        reuired: true,
    },
},
{ timestamps: true },
    // timestamps means we want to save two things time of creation and uptation

);
const User = mongoose.model('User', userSchema);
export default User;