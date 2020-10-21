
const { GraphQLString, GraphQLObjectType, GraphQLNonNull,GraphQLList } = require('graphql');
const MessageType1 = new GraphQLObjectType({
    name: 'MessageType1',
    description: "This represent  messages Details",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        gMessage: {type: GraphQLString},
        phoneNo: {type: new GraphQLNonNull(GraphQLString)},
        userName:{type: new GraphQLNonNull(GraphQLString)},
        gname:{type:new GraphQLNonNull(GraphQLString)}
        
    })
});

module.exports = MessageType1;