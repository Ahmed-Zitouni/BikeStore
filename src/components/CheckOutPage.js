import React, {useState} from 'react'
import Gear1 from '../Icons/Gear1.jpg'
import { FaTrashAlt } from 'react-icons/fa'
import {Collapse} from 'react-collapse';

const CheckOutPage = () => {
    const [Sect1Open, setSect1Open] = useState(true)
    const [Sect2Open, setSect2Open] = useState(false)
    const [Sect3Open, setSect3Open] = useState(false)

    const ClickSect = (sect) => {
        if (sect === 1) setSect1Open(!Sect1Open)
        if (sect === 2) setSect1Open(!Sect2Open)
        if (sect === 2) setSect1Open(!Sect3Open)
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
                                        <input type = "text" placeholder = "Phone number"/>
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
                                        <input type = "radio" placeholder = "First Name"/>
                                        <h1>Directshipment (free)</h1>
                                    </div>
                                    <div>
                                        <input type = "radio" placeholder = "Last Name"/>
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
                                    <input type = "text" placeholder = "1234 1234 1234 1234"/>
                                </div>
                                <div>
                                    <h1>Security Code</h1>
                                    <input type = "text" placeholder = "123"/>
                                </div>
                                <div>
                                    <h1>Experation (MM/YY)</h1>
                                    <input type = "text" placeholder = "MM/YY"/>
                                </div>
                            </form>
                            </Collapse>
                        </div>
                    <div></div>
                    <div></div>
                </div>
                <div className = "OrderInfo">
                    <h1>Your Order</h1>
                    <div className = "CartItemF">
                        <img src = {Gear1}/>
                        <div>
                            <h1>Control Tower 1+ Floor Pump Top Gauge</h1>
                            <p>Black One Size</p> 
                        </div>
                        <h2>1</h2>
                        <h2>$68</h2>
                        <FaTrashAlt />
                    </div>
                    <div className = "CartItemF">
                        <img src = {Gear1}/>
                        <div>
                            <h1>Control Tower 1+ Floor Pump Top Gauge</h1>
                            <p>Black One Size</p> 
                        </div>
                        <h2>1</h2>
                        <h2>$68</h2>
                        <FaTrashAlt />
                    </div>
                    <div className = "PriceDetails">
                        <div>
                            <h2>Discount</h2>
                            <h2>-$15.00</h2>
                        </div>
                        <div>
                            <h2>{'Shipping & handling: Directshipment'}</h2>
                            <h2>$0.00</h2>
                        </div>
                        <div>
                            <h2>Tax</h2>
                            <h2>$0.54</h2>
                        </div>
                        <div>
                            <h2>Total</h2>
                            <h2>$187.67</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage
