const axios =require('axios');
console.log('hello');

const ForeCast = require('../models/ForCast.models');
const Cache = require('../memory/cache');


let cache= new Cache();
cache['data']=[];
cache['timestamp']=Date.now();
console.log(cach['timestamp']);

const weatherController = (req,res)=>{

  let lat = req.query.lat;
  let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;

  let forecast=[];

  if(lat&&lon){
    if (cache.data.length >0){
      forecast=cache.data.map(data => new ForeCast(data));
      console.log('The Cache Data');
      res.send(forecast);
    }else{
      let weatherRespo = axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=1ce9a45e3f574b64af6379c6c4a8b0cc&lat=${lat}&lon=${lon}`).then((respose) =>{
        weather=respose.data
        console.log('here',respose);
        let forecast=weather.data.map((item,idx)=>{
          return new ForeCast(item);
        })
        cache['data']=weather.data
        console.log('The Api Data');
        res.json(forecast);
      }).catch(error=>res.send(error.message))
    }
  }else{
    res.send('Please provide the app with lattitude and longitude');
  }
}

module.exports=weatherController;
