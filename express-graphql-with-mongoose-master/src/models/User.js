const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required:true },
    //email: {type: String },
    phoneNo: {type: String, required: true, unique: true}
});

const User = mongoose.model('UserDetail', userSchema);

module.exports = User;
