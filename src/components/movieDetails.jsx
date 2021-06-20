import React, { useState, useEffect } from 'react'
import axios from '../../src/axios'
import {imageUrl,API_KEY} from '../constants/constants';
import YouTube from 'react-youtube';
import AlertDialog from '../components/AlertDialog'
import '../styles/moviedetails.css';

const MovieDetails = ({details:movie}) => {
    const [trailerUrl,setTrailerUrl] = useState("");
    const [error,setError] = useState("");
    const handleClick = (movie) => {
         if(trailerUrl){
             setTrailerUrl('');
         }else{
             axios.get(`movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                 if(response.data.results.length !== 0){
                     const videoKey = response.data.results[0].key;
                     setTrailerUrl(videoKey)
                 }else{
                    setError({title:'Trailer not found',description:'Sorry this movie trailer is not available.',retryButton:false});
                 }
             }).catch(err=>{setError({title:'Something went wrong!!',description:'Check your internet connection and try again',retryButton:true})}) 
         }
     }

     const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          autoplay: 1,
          origin:'https://youtube.com/'
        },
      };

    return ( 
        <div>
<div className="movie-card" style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}>
{error && <AlertDialog title={error.title} description={error.description} retryButton={error.retryButton}/>}
<div className="color-overlay">
    <div className="movie-content">
        <div className="movie-header">
            <h1 className="movie-title">{movie ? movie.title || movie.name: ''}</h1>
            <h4 className="movie-info">({movie ? movie.release_date ? movie.release_date.slice(0,4) : '' || movie.first_air_date ? movie.first_air_date.slice(0,4) : '' : '' })  | <i className="fa fa-star" /> {movie ? movie.vote_average : ''}/10  </h4>
        </div>
        <p className="movie-desc">{movie ? movie.overview : ''}</p>
        <button className="btn btn-outline" onClick={()=>handleClick(movie)}><i className='fa fa-play play' /> Watch Trailer</button>

    </div>
</div>
</div>
{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
</div>
     );
}
 
export default MovieDetails;
