var {GraphQLNonNull, GraphQLString, GraphQLInt,GraphQLList} = require('graphql');
var GroupType = require('../queries/GroupType');
var MessageType = require('../queries/MessageType');
var Group = require('../../models/Group');

const addGroup = {
    type: GroupType,
    args: {
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString)
        },
        // gId: {
        //     name: 'gId',
        //     type: new GraphQLNonNull(GraphQLInt)
        // },
        gDescription: {
            name: 'gDescription',
            type: new GraphQLNonNull(GraphQLString)
        },
        // gMessage: {
        //     name: 'gMessage',
        //     type: GraphQLList(GraphQLString)
        // }
        // ,
        // email: {
        //     name: 'email',
        //     type: GraphQLString
        // }
    },
    resolve: async function (root, params) {

        const uModel = new Group(params);
        const newAuthor = await uModel.save();
        if(!newAuthor) {
            throw new Error('Error')
        }
        console.log('inside addGroup mutation')
        return newAuthor
    }
}

/*
const addMessage = {
    type: MessageType,
    args: {
        // gId: {
        //     name: 'gId',
        //     type: new GraphQLNonNull(GraphQLInt)
        // },
        gMessage: {
            name: 'gMessage',
            type: GraphQLList(GraphQLString)
        },
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, param) {
       // console.log('gid',param.gId)
        console.log('id',param.gMessage)
        //const newAuthor = await uModel.save();
       // const newAuthor = await Group.find({})
       const gp =  await Group.findById(param._id)
       console.log('gp',gp.gMessage)
       gp.gMessage=gp.gMessage.concat(param.gMessage)
        console.log(gp)
        //const uAuthor = await Group.findByIdAndUpdate(param._id, gp, {new: true})     
              const uAuthor = await Group.findByIdAndUpdate(param._id, gp, {new: true})     

        // if(!newAuthor) {
        //     throw new Error('Error')
        // }
        console.log('inside addGroup mutation')
        return uAuthor
    }
}*/

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




const updateGroup = {
    type: GroupType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        // gId: {
        //     name: 'gId',
        //     type: new GraphQLNonNull(GraphQLInt)
        // },
        gDescription: {
            name: 'gDescription',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function(root, param) {
        console.log('inside  update group')
       let updateAuthor = {};
       if(param.name) {
           updateAuthor.name = param.name
       }
       if(param.gDescription) {
        updateAuthor.gDescription = param.gDescription
    }
       console.log('updateauthor',updateAuthor)

       const uAuthor = await Group.findByIdAndUpdate(param._id, updateAuthor, {new: true})
       console.log('groupu',uAuthor)
       if(!uAuthor) {
           throw new Error('Error')
       }
       return uAuthor
    }
}


const deleteGroup = {
    type: GroupType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, param) {
        console.log('inside delete Group')
      const deleteAuthor =  await Group.findByIdAndRemove(param._id)
      if(!deleteAuthor) {
         throw new Error('Error');
      }
      return deleteAuthor
    }
}



module.exports = { addGroup ,updateGroup, deleteGroup }