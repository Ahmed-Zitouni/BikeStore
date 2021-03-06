import React, {useContext} from 'react';
import './App.scss';
import {useSpring, animated} from 'react-spring'
import NavBar from './components/NavBar'
import { Route, Switch} from 'react-router-dom'

import { BikeContext } from './context/BikeContext';
import LandingText from './components/LandingText';
import MoreInfo from './components/MoreInfo';
import LandingBike from './components/LandingBike';
import BikeTypes from './components/BikeTypes';
import LandingPage from './components/LandingPage';
import CheckOutPage from './components/CheckOutPage'

function App() {
  const {Bikes, dispatch} = useContext(BikeContext)
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const [WhiteBack, setWhiteBack, stopWhiteBack]  = useSpring(() => ({}))
  const Display = Bikes.Display

  //const [category, setCategory] = useState(0)

  const PartSelect = () => {

  }
  return (
    <Switch>

    <Route path="/" exact>
      <LandingPage colors= {1}/>
    </Route>  

    <Route path="/More-Info" exact>  
      <animated.div className = "LandingWrap">
      <div></div>
        <NavBar colors= {2}/>
        <animated.div className = "MoreInfo" style={props}>
          <MoreInfo />
        </animated.div>
      </animated.div>
    </Route>

    <Route path="/Cart" exact> 
      <animated.div className = "ChecKOutWrap"> 
      <div></div>
        <NavBar colors= {1}/>
        <CheckOutPage />
      </animated.div>
    </Route>

    <Route path="/">
      <animated.div className = "App">
          <NavBar />
          <LandingText />
      </animated.div>    
    </Route>    
     
  </Switch>

  )}
    /*
    opacity: 1;
    width: 100%;
    background: white;
    height: 100%;
    position: absolute;
    {
        <div className="ScrollList">
            <Card edit = {setWhiteBack}/>
            <Card />
            <Card />
            <Card />
        </div>
      }
*/ 
export default App;
