const db = require('./../database/database');
const keyboars = require('./../requests/keyboards/keyboards');
const request = require('./../requests/requests');

function createUser(req, res) {
    const body = req.params;
    db.user.create(body.userId, body.publicKey);
    request(body.userId, '👾 Now you can create vote or take part in vote!', keyboars.main);
    res.end();
}

module.exports = {
    createUser: createUser
}