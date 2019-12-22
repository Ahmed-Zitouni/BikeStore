import React, {useContext} from 'react'
import {IoMdCart } from 'react-icons/io'
import { BikeContext } from '../context/BikeContext';
import CartPopUp from './CartPopUp';

const NavBar = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Items = Bikes.Cart
    const Display = Bikes.Display
    let IsCartOpen = Bikes.Display.CartOpen

    const OpenCart = () => {
        let CartValue = IsCartOpen ? false : true
        dispatch(prevState => {
            return ({...prevState, Display : {
                        ...Display,
                        CartOpen : CartValue
                    }
                })
            })
    }
    return (
        <div className = "Navbar">
            <div>Bikeviles</div>
            <div>
                <div><li>Bikes</li></div>
                <div>
                    <li>About Us</li>
                </div>
                <div>
                    <li onClick={() => OpenCart()}>
                        <IoMdCart /> 
                        <div><p>{Items.length}</p></div>
                    </li>
                    {IsCartOpen ? <CartPopUp /> : <></>}

                </div>
            </div>
        </div> 
    )
}

export default NavBar