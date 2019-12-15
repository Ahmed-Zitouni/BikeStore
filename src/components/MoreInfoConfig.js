import React from 'react'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import Saddle from '../Icons/Saddle.svg'



const MoreInfoConfig = () => {

    const PartSelect = () => {

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
                  <div onClick={PartSelect}><img src={Saddle} alt="triangle with all three sides equal"/></div>
                  <div onClick={PartSelect}><img src={Saddle} alt="triangle with all three sides equal"/></div>
                  <div onClick={PartSelect}><img src={Saddle} alt="triangle with all three sides equal"/></div>
                  <div onClick={PartSelect}><img src={Saddle} alt="triangle with all three sides equal"/></div>
                </div>
                <div>
                  <h2>Wheels</h2>
                </div>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default MoreInfoConfig
