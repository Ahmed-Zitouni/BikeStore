import React, {useState, useContext} from 'react'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import SaddleOff from '../Icons/Saddle.svg'
import SaddleOn from '../Icons/SaddleOn.svg'
import WheelOff from '../Icons/WheelOff.svg'
import WheelOn from '../Icons/WheelOn.svg'
import HandleOff from '../Icons/HandleIcon1.svg'
import {Link} from 'react-router-dom'

import Wheel1Sm from '../Icons/Wheel1Sm.png'
import Wheel2Sm from '../Icons/Wheel2Sm.png'
import Wheel3Sm from '../Icons/Wheel3Sm.png'
import Wheel4Sm from '../Icons/Wheel4Sm.png'
import Handle1Sm from '../Icons/Handle1Sm.png'
import Handle2Sm from '../Icons/Handle2Sm.png'
import Handle3Sm from '../Icons/Handle3Sm.png'
import Handle4Sm from '../Icons/Handle4Sm.png'

import Saddle1Sm from '../Icons/Saddle1Sm.png'
import Saddle2Sm from '../Icons/Saddle2Sm.png'
import Saddle3Sm from '../Icons/Saddle3Sm.png'
import Saddle4Sm from '../Icons/Saddle4Sm.png'

import { BikeContext } from '../context/BikeContext';
const MoreInfoConfig = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const [selectedPart, setSelectedPart] = useState("Wheel")
    const [selectedItem, setSelectedItem] = useState(1)
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
            1 : Wheel1Sm,
            2 : Wheel2Sm,
            3 : Wheel3Sm,
            4 : Wheel4Sm
        },
        Handle : {
            1 : Handle1Sm,
            2 : Handle2Sm,
            3 : Handle3Sm,
            4 : Handle4Sm
        },
        Saddle : {
            1 : Saddle1Sm,
            2 : Saddle2Sm,
            3 : Saddle3Sm,
            4 : Saddle4Sm
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
                  <div><img src={SaddleOff} alt="triangle with all three sides equal"/></div>
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
