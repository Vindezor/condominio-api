const jwt = require('jsonwebtoken');
const response = require('../utils/global_response');
// middleware to validate token (rutas protegidas)
const validateJWT = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) res.status(401).json(response({
        status: 'ERROR',
        msg: 'Full authentication is required'
    }));
    try {
        const verified = jwt.verify(token, 'secret')
        //req.user = verified
        next()
    } catch (error) {
        res.status(401).json(response({
            status: 'ERROR',
            msg: 'Full authentication is required'
        }));
    }
}

module.exports = validateJWT;