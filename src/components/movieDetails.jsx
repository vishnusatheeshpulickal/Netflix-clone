import React from 'react'
import {imageUrl} from '../constants/constants';

import '../styles/moviedetails.css';

const MovieDetails = ({details:movie}) => {
    return ( 
<div className="movie-card" style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}>
<div className="color-overlay">
    <div className="movie-content">
        <div className="movie-header">
            <h1 className="movie-title">{movie ? movie.title || movie.name: ''}</h1>
            <h4 className="movie-info">({movie ? movie.release_date ? movie.release_date.slice(0,4) : '' || movie.first_air_date ? movie.first_air_date.slice(0,4) : '' : '' })</h4>
        </div>
        <p className="movie-desc">{movie ? movie.overview : ''}</p>
        <a className="btn btn-outline" href="#"><i className='fa fa-play play' /> Watch Trailer</a>

    </div>
</div>
</div>
     );
}
 
export default MovieDetails;
