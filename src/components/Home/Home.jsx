import React, { useEffect } from 'react'
import './Home.scss'
import {APIKey} from '../../common/Apis/MovieApiKey'
import movieApi from '../../common/Apis/MovieApi'

const Home = () => {
  useEffect(()=>{
    const movieText = "Avengers";
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log("Error", err);
      })
      console.log("API results:", response)
    };
    fetchMovies()
  }, []);
  
  return (
    <div className='home'>
      <div className='movie-series'>
        <div>Movies</div>
        <div>Series</div>
      </div>
    </div>
  )
}

export default Home