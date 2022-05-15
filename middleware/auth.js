const jwt = require('jsonwebtoken');

const loggedIn = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // 'Bearer sdfsdfsdsfsfsdf'

    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) return res.status(403).json({error: 'Token Invalid'})
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json({error: 'Not authorized'});
    }
}

module.exports = {loggedIn}
