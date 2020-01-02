import React, {useState, useContext, useEffect} from 'react'
import Gear1 from '../Icons/Gear1.jpg'
import {Collapse} from 'react-collapse';
import { BikeContext } from '../context/BikeContext';
import CartItemF from '../components/CartItemF'
import swal from 'sweetalert';
import { Redirect } from 'react-router'

const CheckOutPage = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Cart = Bikes.Cart
    const [Sect1Open, setSect1Open] = useState(true)
    const [Sect2Open, setSect2Open] = useState(false)
    const [Sect3Open, setSect3Open] = useState(false)
    const [Sect1Fin, setSect1Fin] = useState(false)
    const [Sect2Fin, setSect2Fin] = useState(false)
    const [Sect3Fin, setSect3Fin] = useState(false)
    const [redirect, setRedirect] = useState(false)


    const [T1, setT1] = useState("")
    const [T2, setT2] = useState("")
    const [T3, setT3] = useState("")
    const [T4, setT4] = useState("")
    const [T5, setT5] = useState("")
    const [T6, setT6] = useState("")
    const [T7, setT7] = useState("")
    const [T8, setT8] = useState("")
    const [T9, setT9] = useState("")
    const [T10, setT10] = useState("")
    const [T11, setT11] = useState("")

    const TextInput = (e, num) => {
        let value = e.target.value
        if (num == 1) setT1(value)
        if (num == 2) setT2(value)
        if (num == 3) setT3(value)
        if (num == 4) setT4(value)
        if (num == 5) setT5(value)
        if (num == 6) setT6(value)
        if (num == 8) setT8(value)

        if (num == 7) {
            if(value.length < 12) setT7(value)
        }
        if (num == 9) {
            if(value.length < 17) setT9(value)
        }
        if (num == 10) {
            if(value.length < 4) setT10(value)
        }
        if (num == 11) {
            if(value.length < 5) setT11(value)
        }
        CheckInputs()
    }
    const CheckInputs = () => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(T8) && T1 && T2 && T3 && T4 && T5 && T6 && T7 && T8) {
            setSect1Fin(true)
        } else {
            setSect1Fin(false)
        }
        if (T9 && T10 && T11) {
            setSect3Fin(true)
        } else {
            setSect3Fin(false)
        }
    }



    const [EShip, setEShip] = useState(0)

    const [Total, setTotal] = useState(0)
    const Proceed = (e) => {
        e.preventDefault()
        //if(Sect1Fin && Sect2Fin && Sect3Fin) {
            swal({
                icon: "success",
                title: "Successful Purchase",
                text: "Thank You For Shopping",
              }).then( x => {
                setRedirect(true)
            })
            dispatch(prevState => {
            return ({...prevState, Cart : []
                })
            })
       // }
    }
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
    const SectOpen = {
        color: '#333'
    }
    const SectDone = {
        background: "#ff5e57"
    }
    const SectNotDone = {
        background: "#424e73"
    }
    const FormDone = {
        background: "#ff5e57",
        cursor: "pointer"
    }
    const FormNotDone = {
        background:"#626571"
    }
    return (
        
        <div className = "CheckOutPage">
            {redirect ? <Redirect to='/'/> : null}
            <h1>CheckOut</h1>
            <div>
                <div className = "PaymentInfo">
                        <div className = "MainSection">
                            <div>
                                <h1 style = {Sect1Fin ? SectDone : SectNotDone}>1</h1>
                                <h1 style = {Sect1Open ? SectOpen : null} onClick={() => setSect1Open(!Sect1Open)}>{'SHIPPING ADDRESS & CONTACT INFO'}</h1>
                            </div>
                            <Collapse isOpened={Sect1Open}>
                            <form className = "Payment-Sect1">
                                    <div>
                                        <input type = "text" placeholder = "First Name" value ={T1} onChange = {(e) => TextInput(e, 1)}/>
                                        <input type = "text" placeholder = "Last Name" value ={T2} onChange = {(e) => TextInput(e, 2)}/>
                                    </div>
                                    <div>
                                        <input type = "text" placeholder = "Street" value ={T3} onChange = {(e) => TextInput(e, 3)}/>
                                    </div>
                                    <div>
                                        <input type = "number" placeholder = "Zipcode" value ={T4} onChange = {(e) => TextInput(e, 4)}/>
                                        <input type = "text" placeholder = "City" value ={T5} onChange = {(e) => TextInput(e, 5)}/>
                                    </div>
                                    <div>
                                        <input type = "text" placeholder = "State" value ={T6} onChange = {(e) => TextInput(e, 6)}/>
                                    </div>
                                    <div>
                                        <input type = "number" placeholder = "Phone number" value ={T7} onChange = {(e) => TextInput(e, 7)}/>
                                        <input type = "text" placeholder = "Email address" value ={T8} onChange = {(e) => TextInput(e, 8)}/>
                                    </div>
                            </form>
                            </Collapse>
                        </div>
                        <div className = "MainSection">
                            <div>
                                <h1 style = {Sect2Fin ? SectDone : SectNotDone}>2</h1>
                                <h1 style = {Sect2Open ? SectOpen : null} onClick={() => setSect2Open(!Sect2Open)}>DELIVERY OPTIONS</h1>
                            </div>
                            <Collapse isOpened={Sect2Open}>
                            <form className = "Payment-Sect2">
                                    <div>
                                        <h1>Please choose a delivery method:</h1>
                                    </div>
                                    <div>
                                        <input type = "radio" name="radAnswer" onClick={() => {setEShip(0);setSect2Fin(true)}}/>
                                        <h1>Directshipment (free)</h1>
                                    </div>
                                    <div>
                                        <input type = "radio" name="radAnswer" value=""onClick={() => {setEShip(20);setSect2Fin(true)}}/>
                                        <h1>2-Day UPS ($19.99)</h1>
                                    </div>
                            </form>
                            </Collapse>
                        </div>
                        <div className = "MainSection">
                            <div>
                                <h1 style = {Sect3Fin ? SectDone : SectNotDone}>3</h1>
                                <h1 style = {Sect3Open ? SectOpen : null} onClick={() => setSect3Open(!Sect3Open)}>PAYMENT</h1>
                            </div>
                            <Collapse isOpened={Sect3Open}>
                            <form className = "Payment-Sect3" onSubmit = {(e) => Proceed(e)}>
                                <div>
                                    <h1>Credit card</h1>
                                    <img src = "https://dstqaa92re5c4.cloudfront.net/Images/Shared/Icons/icon_cards.png"/>
                                </div>
                                <div>
                                    <h1>Number</h1>
                                    <input type = "number" placeholder = "1234 1234 1234 1234" value ={T9} onChange = {(e) => TextInput(e, 9)}/>
                                </div>
                                <div>
                                    <h1>Security Code</h1>
                                    <input type = "number" placeholder = "123" value ={T10} onChange = {(e) => TextInput(e, 10)}/>
                                </div>
                                <div>
                                    <h1>Experation (MM/YY)</h1>
                                    <input type = "number" placeholder = "MM/YY" value ={T11} onChange = {(e) => TextInput(e, 11)}/>
                                </div>
                                <div className = "SubmitBtn">
                                    <input style = {Sect1Fin && Sect2Fin && Sect3Fin ? FormDone : FormNotDone} type="submit" value="Proceed" />
                                    <p>{!Sect1Fin && T8.length > 0 ? "Invalid Email" : ""}</p>
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
                            <h2>{'Shipping & handling'}</h2>
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
