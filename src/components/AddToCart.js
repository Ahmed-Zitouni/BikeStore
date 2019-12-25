import React, {useState, useContext} from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {MdAddShoppingCart, MdCheck} from 'react-icons/md'
import Gear1 from '../Icons/Gear1.jpg'
import Gear3 from '../Icons/Gear3.jpg'
import { BikeContext } from '../context/BikeContext';
import {Link} from 'react-router-dom'



const AddToCart = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const [items, setItems] = useState({1: false, 2 : false, 3 : false})
    const [Clicked1, setClicked1] = useState({})
    const [Clicked2, setClicked2] = useState({})
    const [Clicked3, setClicked3] = useState({})
    const Cart = Bikes.Cart
    const Data =  [
      {
          qty : 1,
          Size: 'One Size',
          Name: 'Blackburn Piston Floor Pump', 
          Color: 'Red',
          Price: 30,
          Img: Gear1
      },
      {
          qty : 1,
          Size: 'One Size',
          Name: 'Black Wheel Rack 2x', 
          Color: 'Metallic Black',
          Price: 56,
          Img: 'https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/athu5ixyqd3gbvve95pt/58044_1.jpg'
      },
      {
          qty : 1,
          Size: 'One Size',
          Name: 'Giro Adult Revel Bike Helmet', 
          Color: 'Black/Green',
          Price: 40,
          Img: Gear3
      }
  ]
    const AddCart = (item) => {
        let old = items[item]
        setItems({...items, [item] : !old})
        if(item === 1) {
            !items[item] ? setClicked1({background: '#ff5e57', boarder: '2px solid #ff5e57'}) : setClicked1({})
        }
        if(item === 2) {
            !items[item] ? setClicked2({background: '#ff5e57', boarder: '2px solid #ff5e57'}) : setClicked2({})
        }
        if(item === 3) {
            !items[item] ? setClicked3({background: '#ff5e57', boarder: '2px solid #ff5e57'}) : setClicked3({})
        }
        if (!Cart.some(ind => ind.Name === Data[item - 1].Name)) {
          let NewCart = Bikes.Cart
          NewCart.push(Data[item - 1])
          dispatch(prevState => {
            return ({...prevState, Cart : 
            [...NewCart]
            })
          })
        }
    }
    const GoBack = () => {
        props.stage[1](1)
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
                  <Link to="/">
                    <div>Countinue Shopping</div>
                  </Link>
                  <Link to="/Cart">
                  Checkout <FaLongArrowAltRight />
                  </Link>
                </div>
                <div className= "CartAdded-SecText">
                  <h2>Acessories</h2>
                </div>
                <div className= "CartAdded-products">
                  <div>
                    <img src = {Gear1}/>
                    <p>Blackburn Piston Floor Pump</p>
                    <div>
                        <h1>$30</h1>
                        <div onClick={() => AddCart(1)} style = {Clicked1}>
                            {!items[1] ? <p>+</p> : <MdCheck style={{color: 'white', fontSize: '1.2rem'}}/>}
                        </div>
                    </div>
                  </div>
                  <div>
                  <img src ="https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/athu5ixyqd3gbvve95pt/58044_1.jpg"/>
                    <p>Black Wheel Rack 2x</p>
                    <div>
                        <h1>$56</h1>
                        <div onClick={() => AddCart(2)} style = {Clicked2}>
                            {!items[2] ? <p>+</p> : <MdCheck style={{color: 'white', fontSize: '1.2rem'}}/>}
                        </div>
                    </div>
                  </div>
                  <div>
                  <img src = {Gear3}/>
                    <p>Giro Adult Revel Bike Helmet</p>
                    <div>
                        <h1>$40</h1>
                        <div onClick={() => AddCart(3)} style = {Clicked3}>
                            {!items[3] ? <p>+</p> : <MdCheck style={{color: 'white', fontSize: '1.2rem'}}/>}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default AddToCart
