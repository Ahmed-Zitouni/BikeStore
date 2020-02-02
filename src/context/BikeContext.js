import React, {useState, createContext} from 'react'
let ImgUrl = "https://d3rs829cgcd3zf.cloudfront.net/"
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
                Img: `${ImgUrl}Bike1All.png`
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
                Img: `${ImgUrl}Gear1.jpg`
            },
            {
                qty : 1,
                Size: 'n/a',
                Name: 'Wheel Rack 2x', 
                Color: 'Metallic Black',
                Price: 56,
                Img: `${ImgUrl}Gear2.jpg`
            },
            {
                qty : 1,
                Size: 'n/a',
                Name: 'Giro Bike Helmet', 
                Color: 'Black/Green',
                Price: 40,
                Img: `${ImgUrl}Gear3.jpg`
            }]
    })
    return (
        <BikeContext.Provider value={{Bikes, dispatch}}>
            {props.children}
        </BikeContext.Provider>
    )
}

export {BikeContextProvider, BikeContext}