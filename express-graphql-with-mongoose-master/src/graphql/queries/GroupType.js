const { GraphQLString, GraphQLObjectType, GraphQLNonNull,GraphQLInt,GraphQLList } = require('graphql');

const GroupType = new GraphQLObjectType({
    name: 'GroupType',
    description: "This represent an Group",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        // email: {type: GraphQLString},
        // gId: {type: new GraphQLNonNull(GraphQLInt )},
        gDescription: { type: GraphQLString},
        // gMessage: {type: GraphQLList(GraphQLString)}
    })
});

module.exports = GroupType;