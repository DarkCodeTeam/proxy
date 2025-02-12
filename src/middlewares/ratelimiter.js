const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiter = new RateLimiterMemory({
    points: 50, 
    duration: 10, 
});

async function rateLimiterMiddleware(req, res, next) {
    try {
        await rateLimiter.consume(req.ip);
        next();
    } catch {
        res.status(429).json({ error: 'Too Many Requests' });
    }
}

module.exports = { rateLimiterMiddleware };
