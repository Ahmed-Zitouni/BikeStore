<<<<<<< HEAD
import React, {useState, useContext} from 'react'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import SaddleOff from '../Icons/Saddle.svg'
import WheelOff from '../Icons/WheelOff.svg'
import HandleOff from '../Icons/HandleIcon1.svg'
import {Link} from 'react-router-dom'

import { BikeContext } from '../context/BikeContext';
const MoreInfoConfig = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const [selectedPart, setSelectedPart] = useState("Wheel")
    const [selectedItem, setSelectedItem] = useState(1)
    let ImgUrl = "https://d3rs829cgcd3zf.cloudfront.net/"
    const PartSelected = { 
      background : '#3fbafb', 
      boxShadow: "rgba(0, 0, 255, 0.1) -5px 8px 9px 0px", 
      border: '2px solid rgba(0, 0, 255, 0)',
    }
    const PartSelectedImg = {
      filter: 'invert(100%) sepia(4%) saturate(14%) hue-rotate(129deg) brightness(103%) contrast(100%)'
    }
    const BikeData = Bikes.BikeData
    const PartSelect = (type) => {
        setSelectedPart(type)
    }
    const ItemSelect = (input) => {
        setSelectedItem(input)
        dispatch(prevState => {
        return ({...prevState, BikeData : {
                    ...BikeData,
                    [selectedPart]: input   
                }
            })
        })
    }
    let BikeImg = {
        Wheel : {
            1 : `${ImgUrl}Wheel1Sm.png`,
            2 : `${ImgUrl}Wheel2Sm.png`,
            3 : `${ImgUrl}Wheel3Sm.png`,
            4 : `${ImgUrl}Wheel4Sm.png`
        },
        Handle : {
            1 : `${ImgUrl}Handle1Sm.png`,
            2 : `${ImgUrl}Handle2Sm.png`,
            3 : `${ImgUrl}Handle3Sm.png`,
            4 : `${ImgUrl}Handle4Sm.png`
        },
        Saddle : {
            1 : `${ImgUrl}Saddle1Sm.png`,
            2 : `${ImgUrl}Saddle2Sm.png`,
            3 : `${ImgUrl}Saddle3Sm.png`,
            4 : `${ImgUrl}Saddle4Sm.png`
        }
    }
    const PartSel = {
      border: '2px solid #ff5e57'
    }
    return (
        <div className="ConfigDiv">
            <div>
              <div>
                <Link to="/">
                <div>
                  <FaLongArrowAltLeft />
                  <p>Back</p>
                </div>  
                </Link>
              </div>
              <div>
                <div>
                  <h1>Configure the Bike</h1>
                </div>
                <div>
                  <div style = {selectedPart == "Wheel" ? PartSelected : null} onClick={() => PartSelect("Wheel")}><img style = {selectedPart == "Wheel" ? PartSelectedImg : null} src={WheelOff}/></div>
                  <div style = {selectedPart == "Saddle" ? PartSelected : null} onClick={() => PartSelect("Saddle")}><img style = {selectedPart == "Saddle" ? PartSelectedImg : null} src={SaddleOff}/></div>
                  <div style = {selectedPart == "Handle" ? PartSelected : null} onClick={() => PartSelect("Handle")}><img style = {selectedPart == "Handle" ? PartSelectedImg : null} src={HandleOff}/></div>
                </div>
                <div>
                  <h2>Wheels</h2>
                </div>
                <div>
                  <div onClick={() => ItemSelect(1)}>
                    <img src = {BikeImg[selectedPart][1]} />
                    <p>Defualt</p>
                    <div style = {BikeData[selectedPart] == 1 ? PartSel : null}/>
                  </div>
                  <div onClick={() => ItemSelect(2)}>
                    <img src = {BikeImg[selectedPart][2]} />
                    <p>Smooth</p>
                    <div style = {BikeData[selectedPart] == 2 ? PartSel : null}/>
                  </div>
                  <div onClick={() => ItemSelect(3)}>
                    <img src = {BikeImg[selectedPart][3]} />
                    <p>Jumper</p>
                    <div style = {BikeData[selectedPart] == 3 ? PartSel : null}/>
                  </div>
                  <div onClick={() => ItemSelect(4)}>
                    <img src = {BikeImg[selectedPart][4]} />
                    <p>Expert</p>
                    <div style = {BikeData[selectedPart] == 4 ? PartSel : null }/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default MoreInfoConfig
=======
import React, {useState, useContext} from 'react'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import SaddleOff from '../Icons/Saddle.svg'
import WheelOff from '../Icons/WheelOff.svg'
import HandleOff from '../Icons/HandleIcon1.svg'
import {Link} from 'react-router-dom'

import { BikeContext } from '../context/BikeContext';
const MoreInfoConfig = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const [selectedPart, setSelectedPart] = useState("Wheel")
    const [selectedItem, setSelectedItem] = useState(1)
    let ImgUrl = "https://d3rs829cgcd3zf.cloudfront.net/"
    const PartSelected = { 
      background : '#3fbafb', 
      boxShadow: "rgba(0, 0, 255, 0.1) -5px 8px 9px 0px", 
      border: '2px solid rgba(0, 0, 255, 0)',
    }
    const PartSelectedImg = {
      filter: 'invert(100%) sepia(4%) saturate(14%) hue-rotate(129deg) brightness(103%) contrast(100%)'
    }
    const BikeData = Bikes.BikeData
    const PartSelect = (type) => {
        setSelectedPart(type)
    }
    const ItemSelect = (input) => {
        setSelectedItem(input)
        dispatch(prevState => {
        return ({...prevState, BikeData : {
                    ...BikeData,
                    [selectedPart]: input   
                }
            })
        })
    }
    let BikeImg = {
        Wheel : {
            1 : `${ImgUrl}Wheel1Sm.png`,
            2 : `${ImgUrl}Wheel2Sm.png`,
            3 : `${ImgUrl}Wheel3Sm.png`,
            4 : `${ImgUrl}Wheel4Sm.png`
        },
        Handle : {
            1 : `${ImgUrl}Handle1Sm.png`,
            2 : `${ImgUrl}Handle2Sm.png`,
            3 : `${ImgUrl}Handle3Sm.png`,
            4 : `${ImgUrl}Handle4Sm.png`
        },
        Saddle : {
            1 : `${ImgUrl}Saddle1Sm.png`,
            2 : `${ImgUrl}Saddle2Sm.png`,
            3 : `${ImgUrl}Saddle3Sm.png`,
            4 : `${ImgUrl}Saddle4Sm.png`
        }
    }
    const PartSel = {
      border: '2px solid #ff5e57'
    }
    return (
        <div className="ConfigDiv">
            <div>
              <div>
                <Link to="/">
                <div>
                  <FaLongArrowAltLeft />
                  <p>Back</p>
                </div>  
                </Link>
              </div>
              <div>
                <div>
                  <h1>Configure the Bike</h1>
                </div>
                <div>
                  <div style = {selectedPart == "Wheel" ? PartSelected : null} onClick={() => PartSelect("Wheel")}><img style = {selectedPart == "Wheel" ? PartSelectedImg : null} src={WheelOff}/></div>
                  <div style = {selectedPart == "Saddle" ? PartSelected : null} onClick={() => PartSelect("Saddle")}><img style = {selectedPart == "Saddle" ? PartSelectedImg : null} src={SaddleOff}/></div>
                  <div style = {selectedPart == "Handle" ? PartSelected : null} onClick={() => PartSelect("Handle")}><img style = {selectedPart == "Handle" ? PartSelectedImg : null} src={HandleOff}/></div>
                </div>
                <div>
                  <h2>Wheels</h2>
                </div>
                <div>
                  <div onClick={() => ItemSelect(1)}>
                    <img src = {BikeImg[selectedPart][1]} />
                    <p>Defualt</p>
                    <div style = {BikeData[selectedPart] == 1 ? PartSel : null}/>
                  </div>
                  <div onClick={() => ItemSelect(2)}>
                    <img src = {BikeImg[selectedPart][2]} />
                    <p>Smooth</p>
                    <div style = {BikeData[selectedPart] == 2 ? PartSel : null}/>
                  </div>
                  <div onClick={() => ItemSelect(3)}>
                    <img src = {BikeImg[selectedPart][3]} />
                    <p>Jumper</p>
                    <div style = {BikeData[selectedPart] == 3 ? PartSel : null}/>
                  </div>
                  <div onClick={() => ItemSelect(4)}>
                    <img src = {BikeImg[selectedPart][4]} />
                    <p>Expert</p>
                    <div style = {BikeData[selectedPart] == 4 ? PartSel : null }/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default MoreInfoConfig
>>>>>>> 7db92891b7ba11b42058ab4ffbbe09438be7267d
