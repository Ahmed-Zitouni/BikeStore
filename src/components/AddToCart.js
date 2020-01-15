import React, {useState, useContext, useEffect} from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {MdAddShoppingCart, MdCheck} from 'react-icons/md'
import Gear1 from '../Icons/Gear1.jpg'
import Gear3 from '../Icons/Gear3.jpg'
import { BikeContext } from '../context/BikeContext';
import {Link} from 'react-router-dom'
import Acessories from './Acessories'
import Data from './Acessories'

const AddToCart = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Display = Bikes.Display
      const CloseAll = () => {
        dispatch(prevState => {
          return ({...prevState, Display : {
                      ...Display,
                      CartOpen:  false,
                      BikesOpen: false,
                      Stage: 1
                  }
              })
          })
      }
    return (
        <div className="CartAdded">
            <div>
              <div className= "CartAdded-top">
                <div>
                    <MdAddShoppingCart />
                </div>  
              </div>
              <div className= "CartAdded-MainText">
                <div>
                  <h1>Added To Cart</h1>
                </div>
                <div className= "CartAdded-buttons">
                  <Link onClick={() => CloseAll()} to="/">
                    <div>Countinue Shopping</div>
                  </Link>
                  <Link to="/Cart">
                  <div>Checkout <FaLongArrowAltRight /></div>
                  </Link>
                </div>
                <div className= "CartAdded-SecText">
                  <h2>Acessories</h2>
                </div>
                <Acessories />
              </div>
            </div>
        </div>
    )
}

export default AddToCart
