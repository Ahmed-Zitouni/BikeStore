import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import Bike from '../Bike.png'

const Card = (props) => {

    useSpring({ config: { duration: 500 }})
    const [Hover, SetHover] = useState(false)
    const [Opened, SetOpened] = useState(false)
    const [MoreInfo, setMoreInfo, stopMoreInfo]  = useSpring(() => ({}))
    const [HoverDiv, setHoverDiv, stopHoverDiv]  = useSpring(() => ({}))
    const [BikeDisplay, setBikeDisplay, stopBikeDisplay]  = useSpring(() => ({}))

    const OpenUp = () => {
        HoverOver()
        props.edit({ 
            width: '100%', height: '100%', 
            position: 'absolute', opacity: 1,
            zIndex: 1, transform: 'scale(1)',background:'white',
            from: { 
                opacity:0,
            }})
        setMoreInfo({ 
            width: '40%', height: '100%', 
            position: 'absolute', 
            margin: 0,left:0,top:0,zIndex: 3,transform: 'scale(1)',background:'#424e73',
            from: { 
                position: 'relative', 
                margin: "0px 10px",transform: 'scale(1.2)',
            }})
        setBikeDisplay({ 
            width: '595px',
            height: '350px',
            marginLeft: '14rem',
            transform: 'scale(1)',
            from: { 
                width: '250px',
                height: '147px',
                position: 'absolute',
            }})
        SetOpened(true)
    } 
    const HoverOver = () => {
        if(!Opened) {
            SetHover(true)
            setHoverDiv({ 
                opacity: 1,
                from: {opacity: 0}})
            setMoreInfo({ 
                transform: 'scale(1.2)',

                from: {transform: 'scale(1)'
            }})
        }
    }
    const HoverLeave = () => {
        if(!Opened) {
            setHoverDiv({ 
                opacity: 0,
                from: {opacity: 1}})
            setMoreInfo({ 
                transform: 'scale(1)',

                from: {transform: 'scale(1)'
            }})
            SetHover(false)
        }
    }           


    return (
        <animated.div 
        className = "Card" 

        style={MoreInfo} 
        onClick={(e) => OpenUp(e)}>
            <animated.div style = {HoverDiv}
            onMouseOver={HoverOver}
            onMouseLeave={HoverLeave}>
                <div>
                    <div>
                        <p>Price</p>
                        <h1>$2800</h1>
                    </div>
                    <div>
                        <p>+</p> 
                    </div>
                </div>
            </animated.div>
            <animated.img 
            style={BikeDisplay}
            src ={"https://images.squarespace-cdn.com/content/v1/569392e49cadb61a0a1c471b/1571759630034-EOH79CGRSXQZ7AA52LF0/ke17ZwdGBToddI8pDm48kKMU66AV8w-h-7uh7q87lx8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc-olKiZsGcSormHkuzklFT_CxRWigoVeuU7qMOrzKwznInbsUHcovl8c4BApFEniv/quick+3.png?format=2500w"}/>
        </animated.div>
    )
}

export default Card

