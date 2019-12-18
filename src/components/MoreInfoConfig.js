import React, {useState, useContext} from 'react'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import SaddleOff from '../Icons/Saddle.svg'
import SaddleOn from '../Icons/SaddleOn.svg'
import WheelOff from '../Icons/WheelOff.svg'
import WheelOn from '../Icons/WheelOn.svg'
import HandleOff from '../Icons/HandleOff.svg'

import { BikeContext } from '../context/BikeContext';



const MoreInfoConfig = () => {
    const {Bikes, dispatch} = useContext(BikeContext)
    const [selectedPart, setSelectedPart] = useState("Wheel")
    const [selectedItem, setSelectedItem] = useState(1)
    const PartSelected = { background : '#3fbafb', boxShadow: "rgba(0, 0, 255, 0.1) -5px 8px 9px 0px", border: '2px solid rgba(0, 0, 255, 0)' }
    const PartNotSelected = {}
    const BikeData = Bikes.BikeData

    console.log(Bikes.BikeData[selectedPart])
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
            '1': WheelOff
        },
        Saddle : {
            '1': SaddleOff
        },
        Handle : {
            '1' : HandleOff
        }
    }

    return (
        <div className="ConfigDiv">
            <div>
              <div>
                <div>
                  <FaLongArrowAltLeft />
                  <p>Back</p>
                </div>  
              </div>
              <div>
                <div>
                  <h1>Configure the Bike</h1>
                </div>
                <div>
                  <div style = {selectedPart == "Wheel" ? PartSelected : PartNotSelected} onClick={() => PartSelect("Wheel")}><img src={selectedPart == "Wheel" ? WheelOn : WheelOff}/></div>
                  <div style = {selectedPart == "Saddle" ? PartSelected : PartNotSelected} onClick={() => PartSelect("Saddle")}><img src={selectedPart == "Saddle" ? SaddleOn : SaddleOff}/></div>
                  <div style = {selectedPart == "Handle" ? PartSelected : PartNotSelected} onClick={() => PartSelect("Handle")}><img src={selectedPart == "Handle" ? HandleOff : HandleOff}/></div>
                  <div name = "4" onClick={(e) => PartSelect(e)}><img src={SaddleOff} alt="triangle with all three sides equal"/></div>
                </div>
                <div>
                  <h2>Wheels</h2>
                </div>
                <div>
                  <div onClick={() => ItemSelect(1)}><img src = {BikeImg[selectedPart]['1']} /></div>
                  <div onClick={() => ItemSelect(2)}><img src = {BikeImg[selectedPart]['1']} /></div>
                  <div onClick={() => ItemSelect(3)}><img src = {BikeImg[selectedPart]['1']} /></div>
                  <div onClick={() => ItemSelect(4)}><img src = {BikeImg[selectedPart]['1']} /></div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default MoreInfoConfig
