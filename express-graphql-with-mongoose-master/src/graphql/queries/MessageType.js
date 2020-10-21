
const { GraphQLString, GraphQLObjectType, GraphQLNonNull,GraphQLList } = require('graphql');
const MessageType = new GraphQLObjectType({
    name: 'MessageType',
    description: "This represent an list of message",
    fields: () => ({
        gMessage: {type: GraphQLList(GraphQLString)}
        
    })
});

module.exports = MessageType;