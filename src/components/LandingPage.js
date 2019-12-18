import React from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import Landing from '../Icons/Landing.jpg'
const LandingPage = () => {

    return (
        <>
            <div className = "Header" style={{backgroundImage :`url(${Landing})`}}>
                <div><h1>Ride Or Die</h1></div>
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
        </>
    )
}

export default LandingPage
