import React, { useState, useEffect } from 'react'
import axios from '../../src/axios'
import {imageUrl,API_KEY} from '../constants/constants';
import YouTube from 'react-youtube';
import AlertDialog from '../components/AlertDialog'
import '../styles/rowpost.css'


function RowPost(props) {
    const [movies, setMovies] = useState([]);
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
                    console.log(videoKey)
                }else{
                    console.log('trailer not found')
                   setError({title:'Trailer not found',description:'Sorry this movie trailer is not available.',retryButton:false});
                }
            }).catch(err=>{setError({title:'Something went wrong!!',description:'Check your internet connection and try again',retryButton:true})})
           console.log('movie Id:-',movie.id) 
        }
    }

   useEffect(()=>{
       axios.get(props.url).then(response=>{
           console.log(response.data)
           setMovies(response.data.results)
       }).catch(err=>{setError({title:'Something went wrong!!',description:'Check your internet connection and try again',retryButton:true})})
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
            {error && <AlertDialog title={error.title} description={error.description} retryButton={error.retryButton}/>}
            <div className="posters">
             {movies.map(m => (
             <img key={m.id} onClick={() => handleClick(m)} src={`${imageUrl+m.backdrop_path}`} alt={m.name} className={props.isSmall ? 'small_poster' : 'poster'} />
             )    
            )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default RowPost
