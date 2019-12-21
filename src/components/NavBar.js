import React from 'react'
import {IoMdCart} from 'react-icons/io'

const NavBar = () => {
    return (
        <div className = "Navbar">
            <div>Bikeviles</div>
            <div>
                <div><li>Bikes</li></div>
                <div><li>About Us</li></div>
                <div><li><IoMdCart /></li></div>
            </div>
        </div> 
    )
}

export default NavBar