const express = require('express'); 
const app = express(); 
const cors = require('cors');
app.use(cors()) 
require('dotenv').config();
const weatherData = require('./data/weather.json');
const PORT =process.env.PORT;
const weatherController=require('./controller/Weather');
const movieController=require('./controller/Movies.controller');

const Cashe=require('./utils/cache');
const axios =require('axios');

app.get('/weather',weatherController);

app.get('/movies',movieController);


app.listen(8000 || 5000);