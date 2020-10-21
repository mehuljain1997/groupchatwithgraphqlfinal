
const { GraphQLString, GraphQLObjectType, GraphQLNonNull,GraphQLInt } = require('graphql');
const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: "This represent an User",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        //email: {type: GraphQLString},
        phoneNo: {type: new GraphQLNonNull(GraphQLString) }
    })
});

module.exports = UserType;