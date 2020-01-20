<<<<<<< HEAD
import React, {useContext} from 'react'
import {IoMdCart} from 'react-icons/io'
import { BikeContext } from '../context/BikeContext';
import CartPopUp from './CartPopUp';
import {Link} from 'react-router-dom'
import BikeDropDown from './BikeDropDown';
import AcessoriesDrop from './AcessoriesDrop';
import MainIcon from '../Icons/MainIcon.svg';
import MainIconW from '../Icons/MainIconW.svg';



const NavBar = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Items = Bikes.Cart
    const DarkM = props.Mode
    const Display = Bikes.Display
    let IsCartOpen = Bikes.Display.CartOpen
    let IsBikesOpen = Bikes.Display.BikesOpen
    let IsGearOpen = Bikes.Display.GearOpen
    const Colors = props.colors
    const NormalColor = {
        color: 'white'
    }
    const Dark = {
        color: '#333'
    }
    const CloseAll = () => {
        dispatch(prevState => {
            return ({...prevState, Display : {
                ...Display,
                BikesOpen : false,
                CartOpen : false,
                GearOpen : false,
                }
            })
        })
    }
    const CloseBike = () => {
        dispatch(prevState => {
            return ({...prevState, Display : {
                ...Display,
                BikesOpen : false
                }
            })
        })
    }
    const OpenBike = () => {
        if(IsBikesOpen) CloseAll()
        else {
            dispatch(prevState => {
                return ({...prevState, Display : {
                    ...Display,
                    BikesOpen : true,
                    CartOpen : false,
                    GearOpen : false
                    }
                })
            })
        }
    }
    const OpenGear = () => {
        if(IsGearOpen) CloseAll()
        else {
            dispatch(prevState => {
                return ({...prevState, Display : {
                    ...Display,
                    BikesOpen : false,
                    CartOpen : false,
                    GearOpen : true
                    }
                })
            })
        }
    }
    const OpenCart = () => {
        if (Items.length > 0) {
            let CartValue = IsCartOpen ? false : true
            dispatch(prevState => {
                return ({...prevState, Display : {
                    ...Display,
                    CartOpen : CartValue,
                    BikesOpen : false,
                    GearOpen : false
                }
            })
        })
        }
    }
    const DarkS = {
        color: "white"
    }
    const Selected = {
        color: '#ff5e57',
        fontWeight: '600',
        fontSize: '1rem',
    }
    return (
        <div className = "Navbar">
<div style = {Colors == 1 ? Dark : NormalColor}><Link to = "/" onClick = {() => CloseAll()}><img src = {Colors == 1 ? MainIcon : MainIconW}/><img src = {MainIcon} /></Link></div>
            <div style = {Colors == 1 ? NormalColor : Dark}>
                <div style={DarkM ? DarkS : null}>
                    <div className = "NavBox" onClick = {() => OpenBike()}>
                        <li style = {IsBikesOpen ? Selected : null}>Bikes</li>
                    </div>
                        {IsBikesOpen ? <BikeDropDown /> : <></>}
                </div>
                <div style={DarkM ? DarkS : null}>
                    <div className = "NavBox" onClick = {() => OpenGear()}>
                        <li style = {IsGearOpen ? Selected : null}>Gear</li>
                    </div>
                    {IsGearOpen ? <AcessoriesDrop /> : <></>}
                </div>
                <div style={DarkM ? DarkS : null}>
                    <div className = "CartIcon NavBox" onClick={() => OpenCart()}>
                        <li>
                            <IoMdCart /> 
                            <div id="CartItems"><p>{Items.length}</p></div>
                        </li>
                    </div>
                    {IsCartOpen ? <CartPopUp /> : <></>}
                </div>
            </div>
        </div> 
    )
}

=======
import React, {useContext} from 'react'
import {IoMdCart} from 'react-icons/io'
import { BikeContext } from '../context/BikeContext';
import CartPopUp from './CartPopUp';
import {Link} from 'react-router-dom'
import BikeDropDown from './BikeDropDown';
import AcessoriesDrop from './AcessoriesDrop';
import MainIcon from '../Icons/MainIcon.svg';
import MainIconW from '../Icons/MainIconW.svg';



const NavBar = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Items = Bikes.Cart
    const DarkM = props.Mode
    const Display = Bikes.Display
    let IsCartOpen = Bikes.Display.CartOpen
    let IsBikesOpen = Bikes.Display.BikesOpen
    let IsGearOpen = Bikes.Display.GearOpen
    const Colors = props.colors
    const NormalColor = {
        color: 'white'
    }
    const Dark = {
        color: '#333'
    }
    const CloseAll = () => {
        dispatch(prevState => {
            return ({...prevState, Display : {
                ...Display,
                BikesOpen : false,
                CartOpen : false,
                GearOpen : false,
                }
            })
        })
    }
    const CloseBike = () => {
        dispatch(prevState => {
            return ({...prevState, Display : {
                ...Display,
                BikesOpen : false
                }
            })
        })
    }
    const OpenBike = () => {
        if(IsBikesOpen) CloseAll()
        else {
            dispatch(prevState => {
                return ({...prevState, Display : {
                    ...Display,
                    BikesOpen : true,
                    CartOpen : false,
                    GearOpen : false
                    }
                })
            })
        }
    }
    const OpenGear = () => {
        if(IsGearOpen) CloseAll()
        else {
            dispatch(prevState => {
                return ({...prevState, Display : {
                    ...Display,
                    BikesOpen : false,
                    CartOpen : false,
                    GearOpen : true
                    }
                })
            })
        }
    }
    const OpenCart = () => {
        if (Items.length > 0) {
            let CartValue = IsCartOpen ? false : true
            dispatch(prevState => {
                return ({...prevState, Display : {
                    ...Display,
                    CartOpen : CartValue,
                    BikesOpen : false,
                    GearOpen : false
                }
            })
        })
        }
    }
    const DarkS = {
        color: "white"
    }
    const Selected = {
        color: '#ff5e57',
        fontWeight: '600',
        fontSize: '1rem',
    }
    return (
        <div className = "Navbar">
<div style = {Colors == 1 ? Dark : NormalColor}><Link to = "/" onClick = {() => CloseAll()}><img src = {Colors == 1 ? MainIcon : MainIconW}/><img src = {MainIcon} /></Link></div>
            <div style = {Colors == 1 ? NormalColor : Dark}>
                <div style={DarkM ? DarkS : null}>
                    <div className = "NavBox" onClick = {() => OpenBike()}>
                        <li style = {IsBikesOpen ? Selected : null}>Bikes</li>
                    </div>
                        {IsBikesOpen ? <BikeDropDown /> : <></>}
                </div>
                <div style={DarkM ? DarkS : null}>
                    <div className = "NavBox" onClick = {() => OpenGear()}>
                        <li style = {IsGearOpen ? Selected : null}>Gear</li>
                    </div>
                    {IsGearOpen ? <AcessoriesDrop /> : <></>}
                </div>
                <div style={DarkM ? DarkS : null}>
                    <div className = "CartIcon NavBox" onClick={() => OpenCart()}>
                        <li>
                            <IoMdCart /> 
                            <div id="CartItems"><p>{Items.length}</p></div>
                        </li>
                    </div>
                    {IsCartOpen ? <CartPopUp /> : <></>}
                </div>
            </div>
        </div> 
    )
}

>>>>>>> 7db92891b7ba11b42058ab4ffbbe09438be7267d
export default NavBar