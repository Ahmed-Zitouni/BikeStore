import React, {useContext} from 'react'
import Bike1 from '../Icons/Bike1.png'
import Wheel1 from '../Icons/Wheel1.png'
import Saddle1 from '../Icons/Saddle1.png'
import Handle1 from '../Icons/Handle1.png'
import Bike2 from '../Icons/Bike2.png'
import Wheel2 from '../Icons/Wheel2.png'
import Saddle2 from '../Icons/Saddle2.png'
import Handle2 from '../Icons/Handle2.png'
import Bike3 from '../Icons/Bike3.png'
import Wheel3 from '../Icons/Wheel3.png'
import Saddle3 from '../Icons/Saddle3.png'
import Handle3 from '../Icons/Handle3.png'
import Bike4 from '../Icons/Bike4.png'
import Wheel4 from '../Icons/Wheel4.png'
import Saddle4 from '../Icons/Saddle4.png'
import Handle4 from '../Icons/Handle4.png'

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


    const BikeIds = {
        1: Bike1,
        2: Bike2,
        3: Bike3,
        4: Bike4
    }
    const Wheels = {
        1: Wheel1,
        2: Wheel2,
        3: Wheel3,
        4: Wheel4
    }
    const Saddles = {
        1: Saddle1,
        2: Saddle2,
        3: Saddle3,
        4: Saddle4
    }
    const Handles = {
        1: Handle1,
        2: Handle2,
        3: Handle3,
        4: Handle4
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
