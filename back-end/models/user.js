const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
}, {
    timestamps: ['createdAt', 'updatedAt']
});

const User = model("User", UserSchema);

module.exports = User;