const jwt = require('jsonwebtoken');
const baseResponse = require('./baseResponse');
const jwtSecret = 'NOIqwehinp1o2$&32holik';

const generateToken = (data) => {
    return jwt.sign(data, jwtSecret)
}

const accessToken = (req, res, next) => {
    // console.log(req.headers.cookie);
    const token = req.headers.cookie.split('=')[1];
    // console.log(token);
    req.data = jwt.verify(token, jwtSecret);
    next();
}

const auth = (req, res, next) => {
    var token;
    if (req.headers && req.headers.authorization) {
        var parts = req.headers.authorization.split(' ');

        if (parts.length === 2) {
            var scheme = parts[0],
                credentials = parts[1];

            if (/^Bearer$/i.test(scheme)) {
                token = credentials;
            }
        } else {
            return baseResponse.sendError(res, {}, 'Format is Authorization: Bearer [token]!', 401);
        }
    } else if (req.param('token')) {
        token = req.param('token');

        // We delete the token from query and body to not mess with blueprints
        delete req.query.token;
        delete req.body.token;
    } else {
        return baseResponse.sendError(res, {}, 'No Authorization header was found', 403);
    }


    verifyToken(token, function (error, token) {
        if (error) {
            return baseResponse.sendError(res, {}, 'Invalid token or expired!', 401);
        } else {
            req.token = token;
            req.user = token;
            return next();
        }
    });
}

const verifyToken = (token, verified) => {
    if(token && verified) {
        return jwt.verify(
            token, // The token to be verified
            jwtSecret, // The secret we used to sign it.
            verified // The callback to be call when the verification is done.
        );
    }
    // let data = jwt.verify(token, jwtSecret);
    // console.log(data);
    // return data;
}

module.exports = {generateToken, accessToken, auth}