import React, {useState} from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {MdAddShoppingCart, MdCheck} from 'react-icons/md'


const AddToCart = (props) => {
    const [items, setItems] = useState({1: false, 2 : false, 3 : false})
    const [Clicked1, setClicked1] = useState({})
    const [Clicked2, setClicked2] = useState({})
    const [Clicked3, setClicked3] = useState({})

    const AddAces = (item) => {
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
                  <div onClick={() => GoBack()}>Countinue Shopping</div>
                  <div>Checkout <FaLongArrowAltRight /></div>
                </div>
                <div className= "CartAdded-SecText">
                  <h2>Acessories</h2>
                </div>
                <div className= "CartAdded-products">
                  <div>
                    <img src ="https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/athu5ixyqd3gbvve95pt/58044_1.jpg"/>
                    <p>Black Wheel Rack 2x</p>
                    <div>
                        <h1>$56</h1>
                        <div onClick={() => AddAces(1)} style = {Clicked1}>
                            {!items[1] ? <p>+</p> : <MdCheck style={{color: 'white', fontSize: '1.2rem'}}/>}
                        </div>
                    </div>
                  </div>
                  <div>
                  <img src ="https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/athu5ixyqd3gbvve95pt/58044_1.jpg"/>
                    <p>Black Wheel Rack 2x</p>
                    <div>
                        <h1>$56</h1>
                        <div onClick={() => AddAces(2)} style = {Clicked2}>
                            {!items[2] ? <p>+</p> : <MdCheck style={{color: 'white', fontSize: '1.2rem'}}/>}
                        </div>
                    </div>
                  </div>
                  <div>
                  <img src ="https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/athu5ixyqd3gbvve95pt/58044_1.jpg"/>
                    <p>Black Wheel Rack 2x</p>
                    <div>
                        <h1>$56</h1>
                        <div onClick={() => AddAces(3)} style = {Clicked3}>
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
