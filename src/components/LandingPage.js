import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import LandingText from './LandingText'
import LandingBike from './LandingBike'
import BikeTypes from './BikeTypes'
import NavBar from './NavBar'

const LandingPage = (props) => {
    const [category, setCategory] = useState(0)

    return (
        <>
        <div className = "LandingBike-Wrap"> <div></div> </div>
        <animated.div className = "Landing">
            <NavBar colors = {1} Mode={true}/>
            <div className="LandingMid">
                <LandingText />
                <LandingBike/>
            </div>
        </animated.div>
        </>
    )
}

export default LandingPage
