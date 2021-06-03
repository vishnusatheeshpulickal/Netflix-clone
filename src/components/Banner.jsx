import React,{useEffect,useState} from 'react'
import axios from '../../src/axios'
import {API_KEY,imageUrl} from '../constants/constants'
import '../styles/banner.css'

function Banner() {
    const [movie,setMovie] = useState()
    useEffect(() => {
       axios.get(`trending/all/day?api_key=${API_KEY}&language=en-US`).then(response=>{
           const random = Math.floor(Math.random()*response.data.results.length);
           console.log(response.data.results[random])
           setMovie(response.data.results[random])
       })
    }, [])

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + '...' : str;
    }
    return (
        <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
            <div className="content">
               <h1 className="title">{movie ? movie.title || movie.name: ''}</h1>
               <h1 className="details"> {movie ? movie.release_date ? movie.release_date.slice(0,4) : '' || movie.first_air_date ? movie.first_air_date.slice(0,4) : '' : '' }  | <i className="fa fa-star" /> {movie ? movie.vote_average : ''}  </h1>
               <div className="banner_buttons">
                   <button className="button">Play</button>
                   <button className="button">My list</button>
               </div>
               <h1 className='description'>{movie ? truncate(movie.overview,156) : ''}</h1>
            </div>    
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
