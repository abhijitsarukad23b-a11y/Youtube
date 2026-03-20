import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type: String, 
        required: true
    },
    coverimage:{
        type: String
    },
    watchhistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "video"
        }
    ],
    password:{
        type: String,
        required: [true, "password is required"]
    },
    refreshToken: {
        type: String
    }
},{timestamps: true});

userSchema.pre("save", function(next) {
    if(this.isModified("password")) return next();
    this.password = this.password.bcrypt(10);
    next();
}) 

userSchema.methods.comparePassword = function(password){
    return this.password.compare(password);
}

const User = mongoose.model("User", userSchema);
