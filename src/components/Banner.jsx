import React from 'react'
import '../styles/banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className="content">
               <h1 className="title">Title</h1>
               <div className="banner_buttons">
                   <button className="button">Play</button>
                   <button className="button">My list</button>
               </div>
               <h1 className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Tempora, voluptatem! Magnam quos alias eligendi aperiam aliquam exercitationem voluptate? 
               Expedita cupiditate sint iure necessitatibus molestiae quisquam consequatur optio earum architecto neque!</h1>
            </div>    
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
