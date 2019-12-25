import React, {useState, useContext, useEffect} from 'react'
import Gear1 from '../Icons/Gear1.jpg'
import {Collapse} from 'react-collapse';
import { BikeContext } from '../context/BikeContext';
import CartItemF from '../components/CartItemF'

const CheckOutPage = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Cart = Bikes.Cart
    const [Sect1Open, setSect1Open] = useState(true)
    const [Sect2Open, setSect2Open] = useState(false)
    const [Sect3Open, setSect3Open] = useState(false)
    const [EShip, setEShip] = useState(0)

    const [Total, setTotal] = useState(0)
 
    const ClickSect = (sect) => {
        if (sect === 1) setSect1Open(!Sect1Open)
        if (sect === 2) setSect1Open(!Sect2Open)
        if (sect === 2) setSect1Open(!Sect3Open)
    }
    const RemoveItem = (number) => {
        dispatch(prevState => {
        return ({...prevState, Cart : [
                ...Cart.filter((value, index) => number !== index)
            ]
            })
        })
    }
    useEffect(() => {
        setTotal(FindTotal())
    }, [Cart])
    const FindTotal = () => {
        let Temp = 0;
        Cart.map(item => {
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
        <div className = "CheckOutPage">
            <h1>CheckOut</h1>
            <div>
                <div className = "PaymentInfo">
                        <div className = "MainSection">
                            <div>
                                <h1>1</h1>
                                <h1 onClick={() => setSect1Open(!Sect1Open)}>{'SHIPPING ADDRESS & CONTACT INFO'}</h1>
                            </div>
                            <Collapse isOpened={Sect1Open}>
                            <form className = "Payment-Sect1">
                                    <div>
                                        <input type = "text" placeholder = "First Name"/>
                                        <input type = "text" placeholder = "Last Name"/>
                                    </div>
                                    <div>
                                        <input type = "text" placeholder = "Street"/>
                                    </div>
                                    <div>
                                        <input type = "text" placeholder = "Zipcode"/>
                                        <input type = "text" placeholder = "City"/>
                                    </div>
                                    <div>
                                        <input type = "text" placeholder = "State"/>
                                    </div>
                                    <div>
                                        <input type = "number" placeholder = "Phone number"/>
                                        <input type = "text" placeholder = "Email address"/>
                                    </div>
                            </form>
                            </Collapse>
                        </div>
                        <div className = "MainSection">
                            <div>
                                <h1>2</h1>
                                <h1 onClick={() => setSect2Open(!Sect2Open)}>DELIVERY OPTIONS</h1>
                            </div>
                            <Collapse isOpened={Sect2Open}>
                            <form className = "Payment-Sect2">
                                    <div>
                                        <h1>Please choose a delivery method:</h1>
                                    </div>
                                    <div>
                                        <input type = "radio" name="radAnswer" onClick={() => setEShip(0)}/>
                                        <h1>Directshipment (free)</h1>
                                    </div>
                                    <div>
                                        <input type = "radio" name="radAnswer" onClick={() => setEShip(20)}/>
                                        <h1>2-Day UPS ($19.99)</h1>
                                    </div>
                            </form>
                            </Collapse>
                        </div>
                        <div className = "MainSection">
                            <div>
                                <h1>3</h1>
                                <h1 onClick={() => setSect3Open(!Sect3Open)}>PAYMENT</h1>
                            </div>
                            <Collapse isOpened={Sect3Open}>
                            <form className = "Payment-Sect3">
                                <div>
                                    <h1>Credit card</h1>
                                    <img src = "https://dstqaa92re5c4.cloudfront.net/Images/Shared/Icons/icon_cards.png"/>
                                </div>
                                <div>
                                    <h1>Number</h1>
                                    <input type = "number" placeholder = "1234 1234 1234 1234"/>
                                </div>
                                <div>
                                    <h1>Security Code</h1>
                                    <input type = "number" placeholder = "123"/>
                                </div>
                                <div>
                                    <h1>Experation (MM/YY)</h1>
                                    <input type = "number" placeholder = "MM/YY"/>
                                </div>
                            </form>
                            </Collapse>
                        </div>
                    <div></div>
                    <div></div>
                </div>

                <div className = "OrderInfo">
                    <h1>Your Order</h1>
                    {Cart.map((item, num) => <CartItemF remove = {RemoveItem} data = {item} numb = {num}/>)}
                
                    <div className = "PriceDetails">
                        <div>
                            <h2>Discount</h2>
                            <h2>{Cart.length > 0 ? "-$15.00" : "$0.00"}</h2>
                        </div>
                        <div>
                            <h2>{'Shipping & handling: Directshipment'}</h2>
                            <h2>{EShip && Cart.length > 0 ? "$20.00" : "$0.00"}</h2>
                        </div>
                        <div>
                            <h2>Tax</h2>
                            <h2>${Cart.length > 0 ? (Total * 0.054).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}) : "0.00"}</h2>
                        </div>
                        <div>
                            <h2>Total</h2>
                            <h2>${Cart.length > 0 ? (Total + (Total * 0.054) - 15 + EShip).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}) : "0.00"}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage
