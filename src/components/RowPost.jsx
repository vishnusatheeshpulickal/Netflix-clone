import React, { useState, useEffect } from 'react'
import axios from '../../src/axios'
import {API_KEY,imageUrl} from '../constants/constants'
import {originals} from '../urls'
import '../styles/rowpost.css'


function RowPost(props) {
    const [movies, setMovies] = useState([])
   useEffect(()=>{
       axios.get(props.url).then(response=>{
           console.log(response.data)
           setMovies(response.data.results)
       })
   },[])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
             {movies.map(m => (
             <img key={m.id} src={`${imageUrl+m.backdrop_path}`} alt="poster" className={props.isSmall ? 'small_poster' : 'poster'} />
             )    
            )}
            </div>
        </div>
    )
}

export default RowPost
