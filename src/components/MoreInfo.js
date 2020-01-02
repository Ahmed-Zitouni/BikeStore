import React, {useContext} from 'react' 
import MoreInfoMain from './MoreInfoMain'
import MoreInfoConfig from './MoreInfoConfig'
import AddToCart from './AddToCart'
import { BikeContext } from '../context/BikeContext';

const MoreInfo = () => {
    const {Bikes} = useContext(BikeContext)
    const Stage = Bikes.Display.Stage

    return (
        <>
            <MoreInfoMain/>
            {Stage == 1 ? <MoreInfoConfig/> : <AddToCart/>}
        </>
    )
}

export default MoreInfo
