var {GraphQLNonNull, GraphQLString, GraphQLInt,graphql} = require('graphql');
var UserType = require('../queries/UserType');
var User = require('../../models/User')

const addUser = {
    type: UserType,
    args: {
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString)
        },
        // email: {
        //     name: 'email',
        //     type: GraphQLString
        // },
        phoneNo: {
            name: 'phoneNo',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, params) {
        console.log('inside adduser')
        const uModel = new User(params);
        const newUser = await uModel.save();
        if(!newUser) {
            throw new Error('Error')
        }
        console.log('inside addUser mutation')
        return newUser
    }
}

const updateUser = {
    type: UserType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        // email: {
        //     name: 'email',
        //     type: GraphQLString
        // },
        phoneNo: {
            name: 'phoneNo',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function(root, param) {
        console.log('inside  update User')
       let updateUser = {};
       if(param.name) {
           updateUser.name = param.name
       }
    //    if(param.email) {
    //        updateUser.email = param.email
    //    }
       if(param.phoneNo) {
        updateUser.phoneNo = param.phoneNo
    }
       
       const uUser = await User.findByIdAndUpdate(param._id, updateUser, {new: true})
       console.log(uUser)
       if(!uUser) {
           throw new Error('Error')
       }
       return uUser
    }
}

const deleteUser = {
    type: UserType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, param) {
        console.log('inside delete User')
      const deleteUser =  await User.findByIdAndRemove(param._id)
      if(!deleteUser) {
         throw new Error('Error');
      }
      return deleteUser
    }
}
module.exports = {addUser, updateUser, deleteUser}