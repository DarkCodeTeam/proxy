const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { rateLimiterMiddleware } = require('./middlewares/ratelimiter');
const routes = require('./routes/index');
const { PORT } = require('./config');

const app = express();


app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(rateLimiterMiddleware);

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`🔰 Secure Proxy is running on port ${PORT}`);
});
