const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: { type: String, required: true, unique: true },
    // email: {type: String, required: true, unique: true},
    // gId: { type: Number, required: true, unique: true},
    gDescription: { type: String},
    // gMessage:{type: Array(String)},  
});

const Group = mongoose.model('GroupInfo', groupSchema);

module.exports = Group;
