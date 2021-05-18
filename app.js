const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://cdn-api.co-vin.in',
    changeOrigin: true,
  }),
);

const PORT = process.env.PORT || 7744;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
