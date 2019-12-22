import React, {useState, useContext, useEffect} from 'react'
import {FaWindowClose, FaTrashAlt } from 'react-icons/fa'
import { BikeContext } from '../context/BikeContext';
import CartItems from './CartItems';

const CartPopUp = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Items = Bikes.Cart
    let StateQyt = Bikes.Cart[0].qty

    const Display = Bikes.Display
    const CloseCart = () => {
        console.log('Click1')

        dispatch(prevState => {
            return ({...prevState, Display : {
                        ...Display,
                        CartOpen :  false
                    }
                })
            })
    }
    
    return (
        <div className = "CartPopUp">
            <div><FaWindowClose onClick={() => CloseCart()}/></div>
            <div>
                <div>
                    <h1>Products</h1>
                    <h1>Color</h1>
                    <h1>Size</h1>
                    <h1>qty</h1>
                    <h1>Total</h1>
                </div>
                {Items.map((info, x) => (
                    <CartItems data = {info} num = {x}/>
                ))}
            </div>
            <div>
                <div><p>Proceed to checkout </p></div>    
            </div>
        </div>
    )
}

export default CartPopUp
