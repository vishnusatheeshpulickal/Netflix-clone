import React from 'react'
import {useState,useEffect} from 'react'
import '../styles/navbar.css'

function NavBar() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100)
            handleShow(true);
            else
            handleShow(false);  
        })
        return () => window.removeEventListener("scroll")
    },[])
    return (
        <div className={`navbar ${show && 'navbar_black'}`}>
            <img className="logo" src={require('../images/Netflix-logo.png')} alt="Netflix-logo" />
            <img className="avatar" src={require('../images/Avatar.png')} alt="Avatar" />
        </div>
    )
}

export default NavBar
