var {GraphQLNonNull, GraphQLString, GraphQLInt,GraphQLList} = require('graphql');
var GroupType = require('../queries/GroupType');
var Message = require('../../models/Message');
const MessageType1 = require('../queries/MessageType1');

const addMessageInMongo = {
    type: MessageType1,
    args: {
        gname: {
            name: 'gname',
            type: new GraphQLNonNull(GraphQLString)
        },
        phoneNo: {
            name: 'phoneNo',
            type: new GraphQLNonNull(GraphQLString)
        },
        gMessage: {
            name: 'gMessage',
            type: new GraphQLNonNull(GraphQLString)
        },
        userName: {
            name: 'userName',
            type: new GraphQLNonNull(GraphQLString)
        }
        // ,
        // email: {
        //     name: 'email',
        //     type: GraphQLString
        // }
    },
    resolve: async function (root, params) {
        console.log('message',params.gMessage)
        if(!params.gMessage){
            console.log('inside if')
            let x = await  Message.find({}, (err, auth) => {
            });
            console.log('x',x)

        }else {

        console.log('else')

        const uModel = new Message(params);
        const newMessage = await uModel.save();
        if(!newMessage) {
            throw new Error('Error')
        }
        console.log('inside addGroup mutation')
        return newMessage
    }
    }
}


// const addMessage = {
//     type: MessageType,
//     args: {
//         // gId: {
//         //     name: 'gId',
//         //     type: new GraphQLNonNull(GraphQLInt)
//         // },
//         gMessage: {
//             name: 'gMessage',
//             type: GraphQLList(GraphQLString)
//         },
//         _id: {
//             name: '_id',
//             type: new GraphQLNonNull(GraphQLString)
//         }
//     },
//     resolve: async function (root, param) {
//        // console.log('gid',param.gId)
//         console.log('id',param.gMessage)
//         //const newAuthor = await uModel.save();
//        // const newAuthor = await Group.find({})
//        const gp =  await Group.findById(param._id)
//        console.log('gp',gp.gMessage)
//        gp.gMessage=gp.gMessage.concat(param.gMessage)
//         console.log(gp)
//         //const uAuthor = await Group.findByIdAndUpdate(param._id, gp, {new: true})     
//               const uAuthor = await Group.findByIdAndUpdate(param._id, gp, {new: true})     

//         // if(!newAuthor) {
//         //     throw new Error('Error')
//         // }
//         console.log('inside addGroup mutation')
//         return uAuthor
//     }
// }

// const addMessageNew = {
//     type: MessageType,
//     args: {
//         name: {
//             name: 'name',
//             type:  new GraphQLNonNull(GraphQLString)
//         },
//         gMessage: {
//             name: 'gMessage',
//             type: GraphQLString
//         },
//     },
//     resolve: async function (root, param) {
//         console.log('gid',param.name.toString())
//         console.log('id',param.gMessage)
//         //const newAuthor = await uModel.save();
//        // const newAuthor = await Group.find({})
//        const gp =  await Group.findOne({"name":param.name.toString()})

//        console.log('gp',gp)
//        if(gp== null){
//            console.log('null',param.gMessage.toString())
//            return {"gMessage":param.gMessage.toString()}

//        }
//        else {    
//        let id = gp._id
//        console.log('id',id)
//        console.log('gpmess',gp.gMessage)
//       if(param.gMessage == null)
//       {
//           console.log('inside if null')
//       }
//       else {
//         gp.gMessage=gp.gMessage.concat(param.gMessage)

//       }
//         console.log(gp)
//                       const uAuthor = await Group.findByIdAndUpdate(id, gp, {new: true})     
//         console.log('inside addGroup mutation')
//         return uAuthor

//     }
      
//     }
// }




const updateMessageInMonGo = {
    type: MessageType1,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        gname: {
            name: 'gname',
            type: GraphQLString
        },
        // gId: {
        //     name: 'gId',
        //     type: new GraphQLNonNull(GraphQLInt)
        // },
        phoneNo: {
            name: 'phoneNo',
            type: new GraphQLNonNull(GraphQLString)
        },
        gMessage: {
            name: 'gMessage',
            type: new GraphQLNonNull(GraphQLString)
        },
        userName: {
            name: 'userName',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function(root, param) {
        console.log('inside  update group')
       let updateAuthor = {};
       if(param.gname) {
           updateAuthor.gname = param.gname
       }
       if(param.phoneNo) {
           updateAuthor.phoneNo = param.phoneNo
       }
       if(param.gMessage) {
        updateAuthor.gMessage = param.gMessage
    }
    if(param.userName) {
        updateAuthor.userName = param.userName
    }
       console.log('updateauthor',updateAuthor)
       console.log('gid',typeof param.gId)

       const uAuthor = await Message.findByIdAndUpdate(param._id, updateAuthor, {new: true})
       console.log('groupu',uAuthor)
       if(!uAuthor) {
           throw new Error('Error')
       }
       return uAuthor
    }
}


const deleteMessageFromMongo = {
    type: MessageType1,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, param) {
        console.log('inside delete Group')
      const deleteAuthor =  await Message.findByIdAndRemove(param._id)
      if(!deleteAuthor) {
         throw new Error('Error');
      }
      return deleteAuthor
    }
}



module.exports = { addMessageInMongo ,updateMessageInMonGo, deleteMessageFromMongo }