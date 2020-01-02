import React, {useState, useContext, useEffect} from 'react'
import {FaWindowClose, FaTrashAlt } from 'react-icons/fa'
import { BikeContext } from '../context/BikeContext';
import CartItems from './CartItems';
import {Link} from 'react-router-dom'


const CartPopUp = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Items = Bikes.Cart
    const [IsScroll, setIsScroll] = useState(false)
    const [Total, setTotal] = useState(0)
    const Display = Bikes.Display
    const CloseCart = () => {
        dispatch(prevState => {
        return ({...prevState, Display : {
                    ...Display,
                    CartOpen :  false
                }
            })
        })
    }
    useEffect(() => {
        if (Items.length <= 0) {
            CloseCart()
        }
        if (Items.length > 2) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
        
        setTotal(FindTotal())
    }, [Items])
    const Scroll = {
        overflowY: 'scroll',
        height: '15rem'
    }
    const ScrollMove = {
        marginRight: '1rem'
    }
    const FindTotal = () => {
        let Temp = 0;
        Items.map(item => {
            let StateQyt = item.qty
            if(!typeof StateQyt == 'number' || !StateQyt == "") {
                Temp = (item.Price * item.qty) + Temp
            } else {
                Temp = item.Price + Temp
            }
        })
        return Temp
    }
    return (
        <div className = "CartPopUp">
            <div><FaWindowClose onClick={() => CloseCart()}/></div>
            <div>
                <div>
                    <h1>Products</h1>
                    <h1>Color</h1>
                    <h1>Type</h1>
                    <h1>qty</h1>
                    <h1 style = {IsScroll ? ScrollMove : null}>Total</h1>
                </div>
                <div style = {IsScroll ? Scroll : null}>
                {Items.map((info, x) => (
                    <CartItems data = {info} num = {x}/>
                ))}
                </div>
            </div>
            <div>
                <div><h1>Total: ${Total}</h1></div>
                <Link onClick={() => CloseCart()} to ="/Cart"><p>Proceed to checkout </p></Link>    
            </div>
        </div>
    )
}

export default CartPopUp
