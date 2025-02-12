const { BACKEND_SERVERS } = require('../config');

let currentIndex = 0;

function getNextServer() {
    const server = BACKEND_SERVERS[currentIndex];
    currentIndex = (currentIndex + 1) % BACKEND_SERVERS.length;
    return server;
}

module.exports = { getNextServer };
