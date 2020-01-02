import React, { useState, useContext, useEffect } from "react";
import { MdCheck } from "react-icons/md";
import Gear1 from "../Icons/Gear1.jpg";
import Gear3 from "../Icons/Gear3.jpg";
import { BikeContext } from "../context/BikeContext";
import {MdKeyboardArrowUp} from 'react-icons/md'

const AcessoriesDrop = () => {

const { Bikes, dispatch } = useContext(BikeContext);
const Display = Bikes.Display;
const [items, setItems] = useState({ 1: false, 2: false, 3: false });
const Cart = Bikes.Cart;
const Clicked = {background: '#ff5e57', boarder: '2px solid #ff5e57'}

const Data = [
  {
    qty: 1,
    Size: "n/a",
    Name: "Piston Floor Pump",
    Color: "Red",
    Price: 30,
    Img: Gear1
  },
  {
    qty: 1,
    Size: "n/a",
    Name: "Wheel Rack 2x",
    Color: "Metallic Black",
    Price: 56,
    Img:
      "https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/athu5ixyqd3gbvve95pt/58044_1.jpg"
  },
  {
    qty: 1,
    Size: "n/a",
    Name: "Giro Bike Helmet",
    Color: "Black/Green",
    Price: 40,
    Img: Gear3
  }
];

const CloseAll = () => {
  dispatch(prevState => {
    return {
      ...prevState,
      Display: {
        ...Display,
        CartOpen: false,
        BikesOpen: false,
        GearOpen: false,
        Stage: 1
      }
    };
  });
};
const AddCart = item => {
  let old = items[item];
  setItems({ ...items, [item]: !old });

  if (!Cart.some(ind => ind.Name === Data[item - 1].Name)) {
    let NewCart = Bikes.Cart;
    NewCart.push(Data[item - 1]);
    dispatch(prevState => {
      return { ...prevState, Cart: [...NewCart] };
    });
  } else {
    dispatch(prevState => {
      return {
        ...prevState,
        Cart: [...Cart.filter(value => Data[item - 1].Name !== value.Name)]
      };
    });
    setItems(prevState => ({ ...prevState, [item]: false }));
  }
};
useEffect(() => {
    Cart.map(list => {
      if(list.Name === Data[0].Name) setItems(prevState => ({...prevState, '1' : true}))
      if(list.Name === Data[1].Name) setItems(prevState => ({...prevState, '2' : true}))
      if(list.Name === Data[2].Name) setItems(prevState => ({...prevState, '3' : true}))
    })
  }, [Cart])
  return (
    <div id="GearDrop">
    <div className = "Products">    
      <div>
        <img src={Gear1} />
        <p>Piston Floor Pump</p>
        <div>
          <h1>$30</h1>
          <div onClick={() => AddCart(1)} style={items[1] ? Clicked : null}>
            {!items[1] ? (
              <p>+</p>
            ) : (
              <MdCheck style={{ color: "white", fontSize: "1.2rem" }} />
            )}
          </div>
        </div>
      </div>
      <div>
        <img src="https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/athu5ixyqd3gbvve95pt/58044_1.jpg" />
        <p>Wheel Rack 2x</p>
        <div>
          <h1>$56</h1>
          <div onClick={() => AddCart(2)} style={items[2] ? Clicked : null}>
            {!items[2] ? (
              <p>+</p>
            ) : (
              <MdCheck style={{ color: "white", fontSize: "1.2rem" }} />
            )}
          </div>
        </div>
      </div>
      <div>
        <img src={Gear3} />
        <p>Giro Bike Helmet</p>
        <div>
          <h1>$40</h1>
          <div onClick={() => AddCart(3)} style={items[3] ? Clicked : null}>
            {!items[3] ? (
              <p>+</p>
            ) : (
              <MdCheck style={{ color: "white", fontSize: "1.2rem" }} />
            )}
          </div>
        </div>
      </div>
      </div>
      <ul>
            <li onClick ={() => CloseAll()}><MdKeyboardArrowUp /></li>
        </ul>
    </div>
  );
};

export default AcessoriesDrop;
