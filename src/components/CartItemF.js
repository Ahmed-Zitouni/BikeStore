import React, {useEffect, useState, useContext} from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { BikeContext } from '../context/BikeContext';


const CartItemF = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Cart = Bikes.Cart
    const info = props.data
    const number = props.numb
    const RemoverFunc = props.remove
    const StateQyt = info.qty
    const [Price, setPrice] = useState(info.Price)

    const GetPrice = () => {
        console.log(!typeof StateQyt == 'number', info.Price)
        if (!typeof StateQyt == 'number' || StateQyt == "") return info.Price
        return info.Price * parseInt(info.qty, 10)
    } 
    useEffect(() => {
        setPrice(GetPrice())
    }, [Cart])
    return (
        <div className = "CartItemF">
            <img src = {info.Img}/>
            <div>
                <h1>{info.Name}</h1>
                <p>{info.Size}</p> 
            </div>
            <h2>{info.qty}</h2>
            <h2>${Price}</h2>
            <FaTrashAlt onClick={() => RemoverFunc(number)}/>
        </div>
    )
}

export default CartItemF
