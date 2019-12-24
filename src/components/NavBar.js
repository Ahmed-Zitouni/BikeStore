import React, {useContext} from 'react'
import {IoMdCart } from 'react-icons/io'
import { BikeContext } from '../context/BikeContext';
import CartPopUp from './CartPopUp';

const NavBar = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Items = Bikes.Cart
    const Display = Bikes.Display
    let IsCartOpen = Bikes.Display.CartOpen
    const Colors = props.Colors
    
    const NormalColor = {
        color: 'white'
    }
    const Dark = {
        color: '#333'
    }
    const OpenCart = () => {
        if (Items.length > 0) {
            let CartValue = IsCartOpen ? false : true
            dispatch(prevState => {
                return ({...prevState, Display : {
                    ...Display,
                    CartOpen : CartValue
                }
            })
        })
        }
    }
    return (
        <div className = "Navbar">
            <div style = {Colors == 1 ? Dark : NormalColor}>Bikeviles</div>
            <div style = {Colors == 1 ? NormalColor : Dark}>
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