import React, {useState, useContext, useEffect} from 'react'
import Bike1All from '../Icons/Bike1All.png'
import Bike2All from '../Icons/Bike2All.png'
import Bike3All from '../Icons/Bike3All.png'
import Bike4All from '../Icons/Bike4All.png'
import {useSpring, animated} from 'react-spring'
import { Gallery, GalleryImage } from 'react-gesture-gallery';

import { BikeContext } from '../context/BikeContext';

const LandingBike = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const [imageNum, setImageNum] = useState(0)
    let Type = Bikes.BikeData.Type
    const BikeData = Bikes.BikeData
    
    useEffect(() => {
        let ArrowL = document.getElementsByClassName("Gallery__NavigationArrow")[0]
        let ArrowR = document.getElementsByClassName("Gallery__NavigationArrow")[1]
        if(imageNum === 0) {
            ArrowL.style.display = "none"
        } else {
            ArrowL.style.display = "flex"
        }
        if(imageNum === 3) {
            ArrowR.style.display = "none"
        } else {
            ArrowR.style.display = "flex"
        }
        /*
        ArrowL.addEventListener("click", () => {
            if(imageNum === 0) {
                ArrowL.style.display = "none"
            } else {
                ArrowL.style.display = "flex"
            }
            if(imageNum === 3) {
                ArrowR.style.display = "none"
            } else {
                ArrowR.style.display = "flex"
            }
        })
        ArrowR.addEventListener("click", () => {
            if(imageNum === 0) {
                ArrowL.style.display = "none"
            } else {
                ArrowL.style.display = "flex"
            }
            if(imageNum === 3) {
                ArrowR.style.display = "none"
            } else {
                ArrowR.style.display = "flex"
            }
        }) 
        */
    }, [imageNum])       
    const BikeSelected =  {
        1 : [1, 2, 3, 4],
        }   

    const UpdateImage = (i) => {
        setImageNum(i)
        dispatch(prevState => {
        return ({...prevState, BikeData : {
                    ...BikeData,
                    BikeId :  BikeSelected[Type][i] 
                }
            })
        })
        
    }
    useEffect(() => {
        dispatch(prevState => {
            return ({...prevState, BikeData : {
                        ...BikeData,
                        BikeId :  BikeSelected[Type][0] 
                    }
                })
            })
        setImageNum(0)
      }, [Type]);
    return (

        <div className="LandingBike">
        
        {Type === 1 &&
            <Gallery 
                index={imageNum}
                onRequestChange={i => UpdateImage(i)}
            >
                <GalleryImage objectFit="contain" key={'1'} src={Bike1All} />
                <GalleryImage objectFit="contain" key={'2'} src={Bike2All} />
                <GalleryImage objectFit="contain" key={'1'} src={Bike3All} />
                <GalleryImage objectFit="contain" key={'2'} src={Bike4All} />
            </Gallery>
        }
        {Type === 2 &&
            <Gallery 
                index={imageNum}
                onRequestChange={i => UpdateImage(i)}
            >
                <GalleryImage objectFit="contain" key={'1'} src={Bike3All} />
                <GalleryImage objectFit="contain" key={'2'} src={Bike4All} />
            </Gallery>
        }
        {Type === 3 &&
            <Gallery 
                index={imageNum}
                onRequestChange={i => UpdateImage(i)}
            >
                <GalleryImage objectFit="contain" key={'1'} src={Bike1All} />
                <GalleryImage objectFit="contain" key={'2'} src={Bike2All} />
            </Gallery>
        }
        </div>
    )
}
LandingBike.defaultProps = {
  UseC : 0
};
export default LandingBike
