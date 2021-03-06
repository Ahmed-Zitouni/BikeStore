import React, {useContext, useState, useEffect} from 'react'

import {AllData} from '../context/Data';
import { BikeContext } from '../context/BikeContext';

const MoreInfoMain = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)

    const Display = Bikes.Display
    const Stage = Bikes.Display.Stage
    const BikeSelected = Bikes.BikeData.BikeId
    const BikeInfo = Bikes.BikeData.BikeInfo
    const WheelSelected = Bikes.BikeData.Wheel
    const SaddleSelected = Bikes.BikeData.Saddle
    const HandleSelected = Bikes.BikeData.Handle
    const BikeAllData = AllData.BikeInfo[BikeSelected - 1]

    const [WheelAnim, setWheelAnim] = useState(false)
    const [SeatAnim, setSeatAnim] = useState(false)
    const [HandleAnim, setHandleAnim] = useState(false)

    let ImgUrl = "https://d3rs829cgcd3zf.cloudfront.net/"
    const BikeIds = {
        1: `${ImgUrl}Bike1.png`,
        2: `${ImgUrl}Bike2.png`,
        3: `${ImgUrl}Bike3.png`,
        4: `${ImgUrl}Bike4.png`
    }
    const Wheels = {
        1: `${ImgUrl}Wheel1.png`,
        2: `${ImgUrl}Wheel2.png`,
        3: `${ImgUrl}Wheel3.png`,
        4: `${ImgUrl}Wheel4.png`
    }
    const Saddles = {
        1: `${ImgUrl}Saddle1.png`,
        2: `${ImgUrl}Saddle2.png`,
        3: `${ImgUrl}Saddle3.png`,
        4: `${ImgUrl}Saddle4.png`
    }
    const Handles = {
        1: `${ImgUrl}Handle1.png`,
        2: `${ImgUrl}Handle2.png`,
        3: `${ImgUrl}Handle3.png`,
        4: `${ImgUrl}Handle4.png`
    }
    const TypeStyle = {
        1 : "Defualt",
        2 : "Smooth",
        3 : "Jumper",
        4 : "Expert"
    }
    const BikeCart = {
        qty : 1,
        Atr: 'One Size',
        Name: BikeAllData.Name, 
        Color: BikeAllData.Color,
        Price: BikeAllData.Price,
        Img: BikeAllData.Full,
        Size: `${TypeStyle[WheelSelected]} ${TypeStyle[SaddleSelected]} ${TypeStyle[HandleSelected]}`
    }
    const AddCart = () => {
        let NewCart = Bikes.Cart
        NewCart.push(BikeCart)
        dispatch(prevState => {
        return ({...prevState,
            Display: {
                ...Display,
                Stage: 2
            },
            Cart : [...NewCart] }
            
            )
        })
    }

    //const AnimHandle = {animation : "HandleAn 1.3s linear"}
    //const AnimHSeat = {animation : "SeatAn 1.3s linear"}
    return (
        <div className="BikeDiv">
            <div>
                <div className = "BikeN">
                    <h1>{BikeAllData.Name}</h1>
                </div>
                <div className = "BikeI">
                    <img src = {BikeIds[BikeSelected]}/>
                    <img src = {Wheels[WheelSelected]}/>
                    <img src = {Saddles[SaddleSelected]}/>
                    <img src = {Handles[HandleSelected]}/>
                </div>
            </div>
            {Stage === 1 &&
            <div className = "BikeP">
                <h1>${BikeAllData.Price}</h1>
                <div onClick= {AddCart}>
                    <h1>+</h1>
                    <h1>Add to Cart</h1>
                </div>
            </div>
            }
        </div>
    )
}

export default MoreInfoMain
