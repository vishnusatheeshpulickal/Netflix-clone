import React, { useState, useEffect } from 'react'
import axios from '../../src/axios'
import {imageUrl,API_KEY} from '../constants/constants';
import YouTube from 'react-youtube';
import '../styles/rowpost.css'


function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

   const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            axios.get(`movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                setTrailerUrl(response.data.results[0].key)
                console.log(response.data.results[0].key)
            })
           console.log('movie Id:-',movie.id) 
        }
    }

   useEffect(()=>{
       axios.get(props.url).then(response=>{
           console.log(response.data)
           setMovies(response.data.results)
       })
   },[])

   const opts = {
    height: '400',
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
