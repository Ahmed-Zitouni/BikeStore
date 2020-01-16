import React, {useContext} from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

import { BikeContext } from '../context/BikeContext';

const Data = [{
    Name: "REVOLT 3",
    Desc: "Designed with Compact Road geometry and built with Advanced-grade composite frame material, the TCR Advanced Disc delivers the best on-the-road efficiency of any bike in its class."
}, {
    Name: "YUKON 2",
    Desc: "Ride farther and faster with an all-new composite frameset that’s engineered with endurance geometry and built-in compliance. Handcrafted with Advanced-grade composite material."
}, {
    Name: "TCX ADVANCED",
    Desc: "Pros settle for nothing less than perfection. The TCX Advanced Pro features a superlight Advanced-grade composite frame that’s handcrafted with race-proven geometry"
}, {
    Name: "ROAM 4 DISC",
    Desc: "Engineered for the beautiful chaos of cyclocross racing.  Its Advanced-grade composite frame makes it easier to power up steep climbs and rail descents in sand, mud or ice."
}
]
const LandingPage = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const BikeId = Bikes.BikeData.BikeId

    return (
        <div className="Landing-Text">
            <div>
                <h1>{Data[BikeId - 1].Name}</h1>
                <p>{Data[BikeId - 1].Desc}</p>
            </div>
            <Link to = '/More-Info'>
                <div onClick={() => console.log('Done')}>
                    <h2>Customize</h2>
                </div>
            </Link>
        </div>
    )
}

export default LandingPage


/*
<div className = "Header" style={{backgroundImage :`url(${Landing})`}}>
                <div><h1>The Leader in the race</h1></div>
            </div>
            <div className = "BikeGrid">
                <div className = "SortBar">
                    <div>
                        <div className="Category">
                            <h1>Category</h1>
                            <div>
                                <input type="checkbox" name="vehicle1" value="Bike"/>
                                <h2>Adventure <span>(2)</span></h2>
                            </div>
                            <div>
                                <input type="checkbox" name="vehicle1" value="Bike"/>
                                <h2>OffRoad <span>(2)</span></h2>
                            </div>     
                            <div>
                                <input type="checkbox" name="vehicle1" value="Bike"/>
                                <h2>City <span>(2)</span></h2>
                            </div>
                        </div>
                        <div className="Category">
                            <h1>Gear</h1>
                            <div>
                                <input type="checkbox" name="vehicle1" value="Bike"/>
                                <h2>Helmat <span>(2)</span></h2>
                            </div>
                            <div>
                                <input type="checkbox" name="vehicle1" value="Bike"/>
                                <h2>Cleaner <span>(2)</span></h2>
                            </div>                            
                            <div>
                                <input type="checkbox" name="vehicle1" value="Bike"/>
                                <h2>Brush <span>(2)</span></h2>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div className = "MainGrid">
                
                        <Link to="/More-Info">
                        <div>
                            <img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/>
                            <h1>TCR ADVANCED 1</h1>
                            <p>$2085</p>
                        </div>
                        </Link>
                    <div><img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/></div>
                    <div><img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/></div>
                    <div><img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/></div>
                    <div><img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/></div>
                    <div><img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/></div>
                    <div><img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/></div>
                    <div><img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/></div>
                    <div><img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/></div>
                    <div><img src= "https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80,w_600/ur4fp5oayv1hxndgtk04/MY20Roam3Disc_ColorA.jpg"/></div>

                </div>
            </div>

*/