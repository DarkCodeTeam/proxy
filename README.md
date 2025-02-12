# Proxy Firewall Documentation

## Overview
This project implements a **secure proxy firewall** that authenticates incoming requests using a secret key. The proxy routes traffic to multiple backend servers while ensuring unauthorized access is blocked.

## Features
- **Authentication**: Validates requests with a secret token (`x-proxy-auth` header).
- **Load Balancing**: Distributes traffic among multiple backend servers.
- **Environment Configurable**: Uses `.env` variables for flexibility.
- **Singleton Pattern**: Ensures a single instance of the configuration is used.

## Configuration
Create a `.env` file in the root directory and define the following variables:
```env
PORT=3003
PROXY_SECRET=your-secret-key
BACKEND_SERVERS=https://backend1.onrender.com,https://backend2.onrender.com
```

## File Structure
```
project-root/
│── src/
│   ├── config.js
│   ├── middlewares/
│   │   ├── auth.js
│   ├── routes/
│   │   ├── index.js
│   ├── proxy.js
│── .env
│── package.json
```

## Running the Proxy Server
Install dependencies and start the server:
```sh
npm install
node src/proxy.js
```

## API Usage
Clients must include the authentication header in their requests:
```sh
curl -H "x-proxy-auth: your-secret-key" http://localhost:3003/
