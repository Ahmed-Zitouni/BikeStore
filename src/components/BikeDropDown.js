import React, {useContext, useState} from 'react'
import { BikeContext } from '../context/BikeContext';
import {MdKeyboardArrowUp} from 'react-icons/md'
import {Link} from 'react-router-dom'
let ImgUrl = "https://d3rs829cgcd3zf.cloudfront.net/"


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
                <img src = {`${ImgUrl}Bike1All.png`}/>
                <h1>REVOLT 3</h1>
            </Link>
            <Link to="/More-Info"  onClick = {() => BikeSelect(2)}>
                <img src = {`${ImgUrl}Bike2All.png`}/>
                <h1>YUKON 2</h1>
            </Link>
            <Link to="/More-Info"  onClick = {() => BikeSelect(3)}>
                <img src = {`${ImgUrl}Bike3All.png`}/>
                <h1>TCX ADVANCED</h1>
            </Link>
            <Link to="/More-Info"  onClick = {() => BikeSelect(4)}>
                <img src = {`${ImgUrl}Bike4All.png`}/>
                <h1>ROAM 4 DISC</h1>
            </Link>
            <ul>
                <li onClick ={() => CloseBike()}><MdKeyboardArrowUp /></li>
            </ul>
        </li>
    )
}

export default BikeDropDown
