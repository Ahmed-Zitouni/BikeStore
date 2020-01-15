import React, {useState, createContext} from 'react'
import Bike1All from '../Icons/Bike1All.png'
import Gear1 from '../Icons/Gear1.jpg'
import Gear3 from '../Icons/Gear3.jpg'
const BikeContext = createContext();
const BikeContextProvider = (props) => {
    const [Bikes, dispatch] = useState({
        BikeData: {
            Type: 1,
            Wheel: 1,
            Handle: 1,
            Saddle: 1,
            BikeId: 1,
            BikeInfo : {
                qty : 1,
                Size: 'Medium/ Large',
                Name: 'TCR Advanced 2 Disc Pro Compact', 
                Color: 'Metallic Black',
                Price: 1400,
                Img: Bike1All
            }
        },
        Cart: [],
        Display : {
            CartOpen: false,
            BikesOpen: false,
            GearOpen: false,
            Stage: 1
        },
        Products : [
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
            }]
    })
    return (
        <BikeContext.Provider value={{Bikes, dispatch}}>
            {props.children}
        </BikeContext.Provider>
    )
}

export {BikeContextProvider, BikeContext}