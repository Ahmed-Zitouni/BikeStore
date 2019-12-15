import React from 'react';
import './App.scss';
import Card from './components/Card';
import {useSpring, animated} from 'react-spring'
import Saddle from './Icons/Saddle.svg'
import Bike1 from './Icons/Bike1.png'
import Wheel1 from './Icons/Wheel1.png'
import Saddle1 from './Icons/Saddle1.png'
import Handle1 from './Icons/Handle1.png'
import MoreInfoMain from './components/MoreInfoMain'
import MoreInfoConfig from './components/MoreInfoConfig'

function App() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const [WhiteBack, setWhiteBack, stopWhiteBack]  = useSpring(() => ({}))

  const PartSelect = () => {

  }
  return (
    <animated.div className = "App">
      {/*
        <div className="ScrollList">
            <Card edit = {setWhiteBack}/>
            <Card />
            <Card />
            <Card />
        </div>
      */}
        <animated.div className = "MoreInfo" style={props}>
          <div></div>

          <MoreInfoMain />
          <MoreInfoConfig />
        </animated.div>
    </animated.div>
  )}
    /*
    opacity: 1;
    width: 100%;
    background: white;
    height: 100%;
    position: absolute;
*/ 
export default App;
