const ForeCast = require('../models/ForCast.models');

const weatherController = (req,res)=>{

    let lat = req.query.lat
    let lon = req.query.lon
    let searchQuery = req.query.searchQuery
  
    console.log(lat);
    console.log(lon);
    console.log(searchQuery);
  
    let weatherRespo = axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}`).then((respose) =>{
      weather=respose.data
  
      let forecast=weather.data.map((item,idx)=>{
        return new ForeCast(item);
      })
      res.json(forecast);
    })
}

module.exports.weatherController;
