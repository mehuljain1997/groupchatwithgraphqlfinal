const { GraphQLList, GraphQLObjectType,GraphQLNonNull,GraphQLString } = require('graphql');
const Group = require('../../models/Group')
const User = require('../../models/User')
const Message = require('../../models/Message')
const UserType = require('./UserType');

const GroupType = require('./GroupType');
const LoginType = require('./LoginType');
console.log('inside query index file')
if (typeof localStorage === "undefined" || localStorage === null) {
    console.log('inside if new')
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
 }

const jwt = require('jsonwebtoken');
const MessageType1 = require('./MessageType1');
const accessTokenSecret = 'MyTODOApp';

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];



exports.authenticateJWT = (req, res, next) => {
    console.log('inside auth')
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};


const BlogQueryRootType = new GraphQLObjectType ({
    name: 'BlogAppSchema',
    description: "Blog Application Schema Query Root",
    fields: () => ({
        Groups: {
            type: new GraphQLList(GroupType),
            description: "List of all groups",
            resolve: async function () {
                console.log('inside group query')
                // let tokenForAuth = localStorage.getItem('token')
                // console.log('tokenforAuth',tokenForAuth)
                // if(tokenForAuth)
                // {
                    console.log('inside  group query')
                    let posts = await  Group.find({})

                    console.log('po',posts)
                    return posts;
                // }
                // else {
                //      alert('Please generate token you do not have authentication for this operation');

                // }
          
            
               
            }
        },
        Login: {
            type: LoginType,
            description: "gave Token",
            args: {
                username: {
                    name: "username",
                    type: new GraphQLNonNull(GraphQLString)
                },
                password: {
                    name: "password",
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: async function (root,params) {
            const username = params.username
            const password = params.password
            console.log('useename',username)
            // Filter user from the users array by username and password
            const user = users.find(u => { return u.username === username && u.password === password });
            console.log('user',user)

            if (user) {
                // Generate an access token
                 const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret); 
                localStorage.setItem('token',accessToken)
                console.log('after')
                console.log('token fetch',localStorage.getItem('token'))
                return { Token: accessToken };
            } 
            else {
                return {'Token':'Username or password incorrect'};
                }
            }
        },
        logout: {
            type: GraphQLString,
            description: "logout from app",
            resolve: async function () {
                console.log('inside logout query')
                console.log('token fetch logout',localStorage.getItem('token'))
                localStorage.removeItem('token')
                console.log('after token fetch logout',localStorage.getItem('token'))
               return 'You have succesfully logout';
            }
        },

        users: {
            type: new GraphQLList(UserType),
            description: "List of all Users",
            resolve: async function () {
                console.log('inside user query')
              return await  User.find({}, (err, auth) => {
              });
            }
        },

        MessageDetail: {
            type: new GraphQLList(MessageType1),
            description: "List of all message",
            resolve: async function () {
                console.log('inside user query')
              return await  Message.find({}, (err, auth) => {
              });
            }
        },

        MessageByGroupName: {
            type: new GraphQLList(MessageType1),
            description: "List of all message",
            args: {
                gname: {
                    name: 'name',
                    type: GraphQLString
                },
            },

            resolve: async function (root, params) {
                console.log('inside user query',params.gname)

                return await Message.find({"gname":params.gname})
            //   return await  Message.find({}, (err, auth) => {
            //   });
            }
        }
        
        
    })
});

module.exports = BlogQueryRootType