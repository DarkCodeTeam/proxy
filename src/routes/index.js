const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { getNextServer } = require('../utils/loadBalancer');
const { authenticate } = require('../middlewares/auth');
const { obfuscateHeaders } = require('../middlewares/obfuscation');

const router = express.Router();

router.use('/', authenticate, obfuscateHeaders, createProxyMiddleware({
    target: getNextServer,
    changeOrigin: true,
    secure: true,
    ws: true,
    logLevel: 'silent'
}));

module.exports = router;
