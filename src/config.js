require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8000,
    BACKEND_SERVERS: process.env.BACKEND_SERVERS ? process.env.BACKEND_SERVERS.split(',') : [
        'https://backend1.onrender.com',
        'https://backend2.onrender.com',
        'https://backend3.onrender.com',
        'http://localhost:8000/'
    ],
    PROXY_SECRET: process.env.PROXY_SECRET || 'U8Y%qrnN5K+SZ!JD4MXI2z',
};
