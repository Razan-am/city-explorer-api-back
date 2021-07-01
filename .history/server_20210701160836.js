const express = require('express'); 
const app = express(); 
const cors = require('cors');
app.use(cors()) 
require('dotenv').config();
const weatherData = require('./data/weather.json');
const PORT =process.env.PORT;
const weatherController=require('./controller/Weather');
const movieController=require('./controller/Movies.controller');
const axios =require('axios');

app.get('/weather',weatherController);

app.get('/movies',movieController);

// app.get('/weather',(req,res)=>{

//   let lat = req.query.lat
//   let lon = req.query.lon
//   let searchQuery = req.query.searchQuery

//   console.log(lat);
//   console.log(lon);
//   console.log(searchQuery);

//   let weatherRespo = axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=1ce9a45e3f574b64af6379c6c4a8b0cc&lat=${lat}&lon=${lon}`).then((respose) =>{
//     weather=respose.data

//     let forecast=weather.data.map((item,idx)=>{
//       return new ForeCast(item);
//     })
//     res.json(forecast);
//   });
  
// });

// app.get('/movies' ,(req,res) =>{
//   let query = req.query.query
//   let moviesData = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=39e6e233f56e3bd1134aa5a554afe4ac&query=${query}`).then(response =>{
//     let moviesList = response.data.results.map((item,idx) =>{
//       return new Movie(item);
//     })
//     console.log(moviesList);
//     res.json(moviesList);
//   }).catch(error=>res.send(error.message));
// })

// class ForeCast{
//   constructor(weatherData){
//     this.date=weatherData.valid_date
//     this.description=weatherData.weather.description
//   }
// } 

// class Movie {
//   constructor(movieData){
//     this.title=movieData.title
//     this.total_votes=movieData.vote_count
//     this.poster="http://image.tmdb.org/t/p/w342"+movieData.poster_path
//   }
// }
app.listen(8000 || 5000);