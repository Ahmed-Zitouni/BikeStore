import React, {useState, useContext} from 'react'
import Bike1All from '../Icons/Bike2All.png'
import { FaTrashAlt } from 'react-icons/fa'
import { BikeContext } from '../context/BikeContext';

const CartItems = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const [InputErr, setInputErr] = useState(false)
    const BadInput = {border: '2px solid red'}
    const IsCartOpen = Bikes.Display.CartOpen
    const Cart = Bikes.Cart

    const Items = Bikes.Cart
    const number = props.num
    let StateQyt = Bikes.Cart[number].qty


    const Data = props.data
    const ChangeAmount = (e) => {
        let info = e.target.value
        var patt1 = /[1-9]/g;
        InputErr ? setInputErr(false) : setInputErr(false) 
        let NewCart = Cart

        if (info.match(patt1) || info == "" ) {
            NewCart[number].qty = info
            dispatch(prevState => {
                return ({...prevState, Cart : [
                        ...NewCart
                    ]
                    })
                })
        }  else {
            setInputErr(true)
            NewCart[number].qty = ""
            dispatch(prevState => {
                return ({...prevState, Cart : [
                        ...NewCart
                    ]
                    })
                })
        }
    }
    const RemoveItem = (e) => {
        //Bikes.Cart[name].qty = info
        let DelItem = e.target.name
        //let NewCart = Items.filter(item => item.id !== DelItem)
        
        dispatch(prevState => {
        return ({...prevState, Cart : [
                ...Items.filter((value, index) => number !== index)
            ]
            })
        })
    }
    return (
        <div className= "CartItems">
            <div>
                <img src = {Data.Img}/>
                <h2>{Data.Name}</h2>
            </div>
            
            <div>
                <h2>{Data.Color}</h2>
            </div>
            <div>
                <h2>{Data.Size}</h2>
            </div>
            <div>
                <input 
                style = {InputErr ? BadInput : null}
                type="text"
                maxLength="1"
                name = '1'
                onChange = {(e) => ChangeAmount(e)}
                value = {StateQyt}
                />
            </div>
            <div>
                <h2>${Data.Price}</h2>
                <FaTrashAlt onClick={(e) => RemoveItem(e)}/>
            </div>                         
        </div>
    )
}

export default CartItems
