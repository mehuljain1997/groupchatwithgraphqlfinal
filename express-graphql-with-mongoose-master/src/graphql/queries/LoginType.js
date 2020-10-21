const { GraphQLString, GraphQLObjectType, GraphQLNonNull,GraphQLInt } = require('graphql');

const LoginType = new GraphQLObjectType({
    name: 'LoginType',
    description: "This represent an Token",
    fields: () => ({
        Token: {type: GraphQLString},

    })
});

module.exports = LoginType;