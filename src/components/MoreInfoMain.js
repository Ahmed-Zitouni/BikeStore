import React from 'react'
import Bike1 from '../Icons/Bike1.png'
import Wheel1 from '../Icons/Wheel1.png'
import Saddle1 from '../Icons/Saddle1.png'
import Handle1 from '../Icons/Handle1.png'

const MoreInfoMain = () => {
    return (
        <div className="BikeDiv">
            <div>
              <h1>IF Mode</h1>
              <p>Overview</p>
              <p>Specs</p>
            </div>
            <div>
              <img src = {Bike1}/>
              <img src = {Wheel1}/>
              <img src = {Saddle1}/>
              <img src = {Handle1}/>
            </div>
            <div>
              <h1>$2850</h1>
              <div>
                <h1>+</h1>
                <h1>Add to Cart</h1>
              </div>
            </div>
        </div>
    )
}

export default MoreInfoMain
