const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const WEATHER_API_KEY = '2af312ab6338be9d777b0b8669854b98';
const NEWS_API_KEY = '330f65e239e140d48ea33557cacce575';

app.get('/api/data', async (req, res) => {
  try {
    const city = req.query.city || 'Toronto';

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    const newsURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

    const [weatherRes, newsRes] = await Promise.all([
      axios.get(weatherURL),
      axios.get(newsURL),
    ]);

    res.json({
      weather: weatherRes.data,
      news: newsRes.data.articles.slice(0, 5), // top 5 headlines
    });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
