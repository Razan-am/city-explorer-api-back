const axios =require('axios');

const Movie = require('../models/Movie.models');

const movieController = (req,res) =>{
    let query = req.query.query
    let moviesData = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=39e6e233f56e3bd1134aa5a554afe4ac&query=${query}`).then(response =>{
      let moviesList = response.data.results.map((item,idx) =>{
        return new Movie(item);
      })
      console.log(moviesList);
      res.json(moviesList);
    }).catch(error=>res.send(error.message));
}                

module.exports=movieController;