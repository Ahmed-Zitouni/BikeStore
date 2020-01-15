import React, {useContext, useState} from 'react'
import Bike1All from '../Icons/Bike1All.png'
import Bike2All from '../Icons/Bike2All.png'
import Bike3All from '../Icons/Bike3All.png'
import Bike4All from '../Icons/Bike4All.png'
import { BikeContext } from '../context/BikeContext';
import {MdKeyboardArrowUp} from 'react-icons/md'
import {Link} from 'react-router-dom'



const BikeDropDown = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Display = Bikes.Display
    const BikeData = Bikes.BikeData

    const BikeSelect = (i) => {
        dispatch(prevState => {
            return ({...prevState, 
                BikeData : {
                    ...BikeData,
                    BikeId : i
                },
                Display : {
                ...Display,
                BikesOpen : false,
                Stage: 1
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
    return (

        <li id="BikeDrop">
            <Link to="/More-Info" onClick = {() => BikeSelect(1)}>
                <img src = {Bike1All}/>
                <h1>REVOLT 3</h1>
            </Link>
            <Link to="/More-Info"  onClick = {() => BikeSelect(2)}>
                <img src = {Bike2All}/>
                <h1>YUKON 2</h1>
            </Link>
            <Link to="/More-Info"  onClick = {() => BikeSelect(3)}>
                <img src = {Bike3All}/>
                <h1>TCX ADVANCED</h1>
            </Link>
            <Link to="/More-Info"  onClick = {() => BikeSelect(4)}>
                <img src = {Bike4All}/>
                <h1>ROAM 4 DISC</h1>
            </Link>
            <ul>
                <li onClick ={() => CloseBike()}><MdKeyboardArrowUp /></li>
            </ul>
        </li>
    )
}

export default BikeDropDown
