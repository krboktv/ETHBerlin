require('./connector');
const user = require('./schemas/user');

const User = {
    create: (userId, publicKey) => {
        user.create({userId: userId, publicKey: publicKey}, (err, doc) => {});
    }
}

module.exports = {
    user: User
}