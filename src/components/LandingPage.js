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
            <NavBar />
            <div className="LandingMid">
                <LandingText />
                <LandingBike UseC = {category}/>
            </div>
            <BikeTypes UseC = {category} SetC = {setCategory}/>
        </animated.div>
        </>
    )
}

export default LandingPage
