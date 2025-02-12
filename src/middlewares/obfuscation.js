function obfuscateHeaders(req, res, next) {
    req.headers['user-agent'] = 'Mozilla/5.0'; 
    req.headers['x-forwarded-for'] = '127.0.0.1';
    req.headers['x-random-padding'] = Math.random().toString(36).substring(7);
    next();
}

module.exports = { obfuscateHeaders };
