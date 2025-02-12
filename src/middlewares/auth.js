const { PROXY_SECRET } = require('../config');

function authenticate(req, res, next) {
    if (req.headers['x-proxy-auth'] !== PROXY_SECRET) {
        return res.status(403).json({ error: 'Access Denied' });
    }
    next();
}

module.exports = { authenticate };
