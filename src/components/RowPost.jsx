import React, { useState, useEffect } from 'react'
import axios from '../../src/axios'
import {imageUrl} from '../constants/constants';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import '../styles/rowpost.css'


function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

   const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || '')
             .then((url)=>{
                 const urlParams = new URLSearchParams(new URL(url).search)
                 setTrailerUrl(urlParams.get("v"));
             }).catch(error => console.log(error))
        }
    }

   useEffect(()=>{
       axios.get(props.url).then(response=>{
           console.log(response.data)
           setMovies(response.data.results)
       })
   },[])

   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
             {movies.map(m => (
             <img key={m.id} onClick={() => handleClick(m)} src={`${imageUrl+m.backdrop_path}`} alt={m.name} className={props.isSmall ? 'small_poster' : 'poster'} />
             )    
            )}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    )
}

export default RowPost
