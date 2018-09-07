const db = require('./../database/database');

function createUser(req, res) {
    const body = req.params;
    db.user.create(body.userId, body.publicKey);
    res.end();
}

module.exports = {
    createUser: createUser
}