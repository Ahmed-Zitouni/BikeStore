import React, {useState, createContext} from 'react'

const BikeContext = createContext();
const BikeContextProvider = (props) => {
    const [Bikes, dispatch] = useState({
        BikeData: {
            Type: 1,
            Wheel: 1,
            Handle: 1,
            Saddle: 1,
            BikeId: 1
        },
        Cart: [
            {
                Type: 'Gear',
                Id : '1',
                Name: 'Bungie', 
                Desc: 'Black26"',
                Price: "3.00",
                Img: 'https://images.giant-bicycles.com/b_white,c_pad,h_90,q_80,w_100/kpnorttuvvzipvaulzuh/71101-71104.jpg'
            }
        ]
    })
    return (
        <BikeContext.Provider value={{Bikes, dispatch}}>
            {props.children}
        </BikeContext.Provider>
    )
}

export {BikeContextProvider, BikeContext}