import React, {useState, useContext, useEffect} from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { BikeContext } from '../context/BikeContext';

const CartItems = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const [InputErr, setInputErr] = useState(false)
    const BadInput = {border: '2px solid red'}
    const IsCartOpen = Bikes.Display.CartOpen
    const Cart = Bikes.Cart
    const number = props.num
    let StateQyt = Bikes.Cart[number].qty
    const Data = props.data

    const [Price, setPrice] = useState(Data.Price)

    const ChangeAmount = (e) => {
        let info = e.target.value
        var NumberCheck = /[1-9]/g;
        InputErr ? setInputErr(false) : setInputErr(false) 
        let NewCart = Cart

        if (info.match(NumberCheck) || info == "" ) {
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
        dispatch(prevState => {
        return ({...prevState, Cart : [
                ...Cart.filter((value, index) => number !== index)
            ]
            })
        })
    }
    useEffect(() => {
        setPrice(GetPrice())
    }, [Cart])

    const GetPrice = () => {
        if (!typeof StateQyt == 'number' || StateQyt == "") return Data.Price
        return Data.Price * parseInt(Data.qty, 10)
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
                <h2>${Price}</h2>
                <FaTrashAlt onClick={(e) => RemoveItem(e)}/>
            </div>                         
        </div>
    )
}

export default CartItems
