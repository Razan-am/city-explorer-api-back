const axios =require('axios');

const Movie = require('../models/Movie.models');
// const Cache = require('../memory/cache');


// let cache= new Cache();
// cache['data']=[];


const movieController = (req,res) =>{
  let moviesList=[];
      let moviesData = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=39e6e233f56e3bd1134aa5a554afe4ac&query=${query}`).then(response =>{
        let moviesList = response.data.results.map((item,idx) =>{
          return new Movie(item);
        })
        cache['data']=response.data.results
        console.log('The Api Data');
        // console.log(moviesList);
        res.json(moviesList);
      }).catch(error=>res.send(error.message));
}                

module.exports=movieController;