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

import { BikeContext } from '../context/BikeContext';

const MoreInfoMain = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)

    const BikeSelected = Bikes.BikeData.BikeId
    const BikeInfo = Bikes.BikeData.BikeInfo
    const WheelSelected = Bikes.BikeData.Wheel
    const SaddleSelected = Bikes.BikeData.Saddle
    const HandleSelected = Bikes.BikeData.Handle
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
    const BikeCart = {
        qty : 1,
        Size: 'One Size',
        Name: 'TCR Advanced 2 Disc Pro Compact', 
        Color: 'Metalic',
        Price: 1400,
        Img: BikeIds[BikeSelected]
    }
    const AddCart = () => {
        let NewCart = Bikes.Cart
        NewCart.push(BikeCart)
        dispatch(prevState => {
        return ({...prevState, Cart : [...NewCart] })
        })
        props.stage[1](2)
    }
    return (
        <div className="BikeDiv">
            <div>
              <h1>{BikeInfo.Name}</h1>
            </div>
            <div>
              <img src = {BikeIds[BikeSelected]}/>
              <img src = {Wheels[WheelSelected]}/>
              <img src = {Saddles[SaddleSelected]}/>
              <img src = {Handles[HandleSelected]}/>
            </div>
            {props.stage[0] === 1 &&
                <div>
                <h1>$2850</h1>
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
