const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    gname: { type: String, required: true},
    // email: {type: String, required: true, unique: true},
    // gId: { type: Number, required: true, unique: true},
    gMessage:{type: String, required: true},
    phoneNo:{type: String, required: true},
    userName:{type: String,required: true},   
});

const Group = mongoose.model('MessageDetaill', groupSchema);

module.exports = Group;
