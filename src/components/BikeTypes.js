import React, {useState, useContext} from 'react'
import { BikeContext } from '../context/BikeContext';

const BikeTypes = () => {
    const {Bikes, dispatch} = useContext(BikeContext)

    const BikeData = Bikes.BikeData
    const Type = Bikes.BikeData.Type

    const SelectedType = {
        color : '#ff5e57'
    }
    const SelectedTypeDiv = {
        background : '#ff5e57'
    }
    const setCategory = (i) => {
        dispatch(prevState => {
            return ({...prevState, BikeData : {
                        ...BikeData,
                        Type :  i 
                    }
                })
            })
    }
    return (
        <div className = "BikeTypes">
          <div>
            <div style = {Type == 1 ? SelectedType : null} onClick = {() => setCategory(1)}>
                <h2>Fast And Aggessive</h2>
                <div style = {Type == 1 ? SelectedTypeDiv : null}></div>
                <h2>Off Road Bikes</h2>
            </div>
            <div style = {Type == 2 ? SelectedType : null} onClick = {() => setCategory(2)}>
                <h2>Here There Anywhere</h2>
                <div style = {Type == 2 ? SelectedTypeDiv : null}></div>
                <h2>City Bikes</h2>
            </div>
            <div style = {Type == 3 ? SelectedType : null} onClick = {() => setCategory(3)}>
                <h2>Live For Adventure</h2>
                <div style = {Type == 3 ? SelectedTypeDiv : null}></div>
                <h2>Mountain Bikes</h2>
            </div>
          </div>
      </div>
    )
}

export default BikeTypes
