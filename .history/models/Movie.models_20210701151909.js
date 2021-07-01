
class Movie {
    constructor(movieData){
      this.title=movieData.title
      this.total_votes=movieData.vote_count
      this.poster="http://image.tmdb.org/t/p/w342"+movieData.poster_path
    }
  }

  module.exports=Movie