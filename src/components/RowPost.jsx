import React, { useState, useEffect } from 'react'
import axios from '../../src/axios'
import {imageUrl} from '../constants/constants';
import AlertDialog from '../components/AlertDialog'
import '../styles/rowpost.css'
import MovieDetails from './movieDetails';


function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    const [error,setError] = useState("");
    const [movieDetails,setMovieDetails] = useState('');

   const handleClick = (movie) => {
       setMovieDetails(movie)
    }

   useEffect(()=>{
       axios.get(props.url).then(response=>{
           setMovies(response.data.results)
       }).catch(err=>{setError({title:'Something went wrong!!',description:'Check your internet connection and try again',retryButton:true})})
   },[])

  
    return (
        <div className="row">
            <h2>{props.title}</h2>
            {error && <AlertDialog title={error.title} description={error.description} retryButton={error.retryButton}/>}
            <div className="posters">
             {movies.map(m => (
             <img key={m.id} onClick={()=>handleClick(m)} src={`${imageUrl+m.backdrop_path}`} alt={m.name} className={props.isSmall ? 'small_poster' : 'poster'} />
             )    
            )}
            </div>
            { movieDetails && <MovieDetails details={movieDetails} />}
        
        </div>
    )
}

export default RowPost
