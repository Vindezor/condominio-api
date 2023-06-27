const jwt = require('jsonwebtoken');
const middlewareController = {};
// middleware to validate token (rutas protegidas)
middlewareController.validateJWT = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) res.status(401);
    try {
        const verified = jwt.verify(token, 'secret')
        //req.user = verified
        next()
    } catch (error) {
        res.status(401);
    }
}

module.export = middlewareController;