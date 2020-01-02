import React, {useState, useContext, useEffect} from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {MdAddShoppingCart, MdCheck} from 'react-icons/md'
import Gear1 from '../Icons/Gear1.jpg'
import Gear3 from '../Icons/Gear3.jpg'
import { BikeContext } from '../context/BikeContext';
import {Link} from 'react-router-dom'
import Acessories from './Acessories'


const AddToCart = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const Display = Bikes.Display
    const [items, setItems] = useState({1: false, 2 : false, 3 : false})
    const Cart = Bikes.Cart
    const Data =  [
      {
          qty : 1,
          Size: 'n/a',
          Name: 'Piston Floor Pump', 
          Color: 'Red',
          Price: 30,
          Img: Gear1
      },
      {
          qty : 1,
          Size: 'n/a',
          Name: 'Wheel Rack 2x', 
          Color: 'Metallic Black',
          Price: 56,
          Img: 'https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/athu5ixyqd3gbvve95pt/58044_1.jpg'
      },
      {
          qty : 1,
          Size: 'n/a',
          Name: 'Giro Bike Helmet', 
          Color: 'Black/Green',
          Price: 40,
          Img: Gear3
      }
  ] 
      const Clicked = {background: '#ff5e57', boarder: '2px solid #ff5e57'}

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
      const AddCart = (item) => {
      let old = items[item]
      setItems({...items, [item] : !old})

      if (!Cart.some(ind => ind.Name === Data[item - 1].Name)) {
        let NewCart = Bikes.Cart
        NewCart.push(Data[item - 1])
        dispatch(prevState => {
          return ({...prevState, Cart : 
          [...NewCart]
          })
        })
      } else {

        dispatch(prevState => {
        return ({...prevState, Cart : [
                ...Cart.filter(value => Data[item - 1].Name !== value.Name)
            ]
            })
        })
        setItems(prevState => ({...prevState, [item]: false}))
      }
    }
    useEffect(() => {
      Cart.map(list => {
        if(list.Name === Data[0].Name) setItems(prevState => ({...prevState, '1' : true}))
        if(list.Name === Data[1].Name) setItems(prevState => ({...prevState, '2' : true}))
        if(list.Name === Data[2].Name) setItems(prevState => ({...prevState, '3' : true}))
      })
    }, [Cart])
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
