import React, {useState} from 'react'

const BikeTypes = () => {
    const [category, setCategory] = useState(0)
    return (
        <div className = "BikeTypes">
          <div>
            <div onClick = {() => setCategory(0)}>
                <h2>Fast And Aggessive</h2>
                <div></div>
                <h2>Off Road Bikes</h2>
            </div>
            <div onClick = {() => setCategory(1)}>
                <h2>Here There Anywhere</h2>
                <div></div>
                <h2>City Bikes</h2>
            </div>
            <div onClick = {() => setCategory(2)}>
                <h2>Live For Adventure</h2>
                <div></div>
                <h2>Mountain Bikes</h2>
            </div>
          </div>
      </div>
    )
}

export default BikeTypes
