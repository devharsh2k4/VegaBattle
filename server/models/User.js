const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 5,
            max: 50,
        },
        battlesWon: {
            type: Number,
            default: 0,
          },
        location: String,
        occupation: String,
    },
    { timestamps: true }
);

const User = mongoose.model("User",UserSchema);

module.exports = User;