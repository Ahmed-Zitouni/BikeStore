import React, {useState, useContext, useEffect} from 'react'
import { Gallery, GalleryImage } from 'react-gesture-gallery';

import { BikeContext } from '../context/BikeContext';

const LandingBike = (props) => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const [imageNum, setImageNum] = useState(0)
    let Type = Bikes.BikeData.Type
    const BikeData = Bikes.BikeData
    let ImgUrl = "https://d3rs829cgcd3zf.cloudfront.net/"

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
                <GalleryImage objectFit="contain" key={'1'} src={`${ImgUrl}Bike1All.png`} />
                <GalleryImage objectFit="contain" key={'2'} src={`${ImgUrl}Bike2All.png`} />
                <GalleryImage objectFit="contain" key={'3'} src={`${ImgUrl}Bike3All.png`} />
                <GalleryImage objectFit="contain" key={'4'} src={`${ImgUrl}Bike4All.png`} />
            </Gallery>
        }
        </div>
    )
}
LandingBike.defaultProps = {
  UseC : 0
};
export default LandingBike
