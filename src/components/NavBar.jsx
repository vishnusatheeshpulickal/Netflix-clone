import React from 'react'
import '../styles/navbar.css'

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src={require('../images/Netflix-logo.png')} alt="Netflix-logo" />
            <img className="avatar" src={require('../images/Avatar.png')} alt="Avatar" />
        </div>
    )
}

export default NavBar
