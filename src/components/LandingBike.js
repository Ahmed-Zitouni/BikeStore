import React, {useState} from 'react'
import Bike1 from '../Icons/Bike1.png'
import {useSpring, animated} from 'react-spring'
import { Gallery, GalleryImage } from 'react-gesture-gallery';


const LandingBike = (props) => {

    const [imageNum, setImageNum] = useState(0);

    console.log(props.UseC)

    return (

        <div className="LandingBike">
        
        {props.UseC === 0 ? 
            <Gallery 
                index={imageNum}
                onRequestChange={i => {
                    setImageNum(i);
                }}
            >
                <GalleryImage objectFit="cover" key={'1'} src={Bike1} />
                <GalleryImage objectFit="cover" key={'2'} src={Bike1} />
            </Gallery> : null}
        </div>
    )
}
LandingBike.defaultProps = {
  UseC : 0
};
export default LandingBike
