import React, {useState, createContext} from 'react'
import Bike1All from '../Icons/Bike1All.png'

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
        }
    })
    return (
        <BikeContext.Provider value={{Bikes, dispatch}}>
            {props.children}
        </BikeContext.Provider>
    )
}

export {BikeContextProvider, BikeContext}