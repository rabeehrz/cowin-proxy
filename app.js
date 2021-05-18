const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('combined'));

const cowinURL = 'https://cdn-api.co-vin.in';

app.use('/api', async (req, res) => {
  const url = req.originalUrl;
  try {
    const response = await axios.get(`${cowinURL}${url}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0',
      },
    });
    res.json({ data: response.data });
  } catch (err) {
    res.json(err);
  }
});

const PORT = process.env.PORT || 7744;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
