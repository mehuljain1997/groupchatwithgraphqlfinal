require('dotenv').config();
const env = process.env;
module.exports = {
    mongoConnectionString: `mongodb://localhost:27017/graphqltest`
}