import React, {useState, createContext} from 'react'
import Bike1All from '../Icons/Bike2All.png'

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
        Cart: [
            {
                qty : 1,
                Size: 'Medium/ Large',
                Name: 'TCR Advanced 2 Disc Pro Compact', 
                Color: 'Metallic Black',
                Price: 1400,
                Img: Bike1All
            },
            {
                qty : 1,
                Size: 'Medium/ Large',
                Name: 'TCR Advanced 2 Disc Pro Compact', 
                Color: 'Metallic Black',
                Price: 1400,
                Img: Bike1All
            },
            {
                qty : 1,
                Size: 'Medium/ Large',
                Name: 'TCR Advanced 2 Disc Pro Compact', 
                Color: 'Metallic Black',
                Price: 1400,
                Img: Bike1All
            }
        ],
        Display : {
            CartOpen: false,
        }
    })
    return (
        <BikeContext.Provider value={{Bikes, dispatch}}>
            {props.children}
        </BikeContext.Provider>
    )
}

export {BikeContextProvider, BikeContext}