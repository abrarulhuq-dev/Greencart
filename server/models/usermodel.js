import mongoose from "mongoose";

const userschema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartitems: { type: Object, default: {} },
}, {minimize: false})

const User = mongoose.model.user || mongoose.model('user' , userschema)


export default User