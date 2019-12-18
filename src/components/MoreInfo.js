import React, {useState} from 'react' 
import MoreInfoMain from './MoreInfoMain'
import MoreInfoConfig from './MoreInfoConfig'
import AddToCart from './AddToCart'

const MoreInfo = () => {
    const [ShopStage, setShopStage] = useState(1)

    return (
        <>
            <MoreInfoMain stage={[ShopStage, setShopStage]}/>
            {ShopStage == 1 ? <MoreInfoConfig stage={[ShopStage, setShopStage]}/> : <AddToCart stage={[ShopStage, setShopStage]}/>}
        </>
    )
}

export default MoreInfo
