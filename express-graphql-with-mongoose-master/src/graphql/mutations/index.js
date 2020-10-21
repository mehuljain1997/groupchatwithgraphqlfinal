var { addUser, updateUser, deleteUser } = require('./UserMutation')
var { addGroup, updateGroup, deleteGroup } = require('./GroupMutation')
var { addMessageInMongo, updateMessageInMonGo, deleteMessageFromMongo } = require('./MessageMutation')

console.log('inside nutation index file')
module.exports = {
    addGroup,
    updateGroup,
    deleteGroup,
    addUser,
    updateUser,
    deleteUser,
    addMessageInMongo,
    updateMessageInMonGo,
    deleteMessageFromMongo
}