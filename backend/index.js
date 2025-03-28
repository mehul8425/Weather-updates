const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

app.get('/api/weather', async (req, res) => {
  const { city = "Toronto" } = req.query;

  try {
    const url = `https://wttr.in/${city}?format=j1`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch weather from wttr.in' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Weather backend running at http://localhost:${PORT}`);
});
