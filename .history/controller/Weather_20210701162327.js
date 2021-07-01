const axios =require('axios');
console.log('hello');

const ForeCast = require('../models/ForCast.models');
const Cache = require('../utils/cache');
const Cashe=require('./utils/cache');

const weatherController = (req,res)=>{
  let cache= new Cache();
  cache['data']=[];
    let lat = req.query.lat
    let lon = req.query.lon
    let searchQuery = req.query.searchQuery
  
    console.log(lat);
    console.log(lon);
    console.log(searchQuery);
  
    let weatherRespo = axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=1ce9a45e3f574b64af6379c6c4a8b0cc&lat=${lat}&lon=${lon}`).then((respose) =>{
      weather=respose.data
      console.log('here',respose);
      let forecast=weather.data.map((item,idx)=>{
        return new ForeCast(item);
      })
      res.json(forecast);
    })
}

module.exports=weatherController;
