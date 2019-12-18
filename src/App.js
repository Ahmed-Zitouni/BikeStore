import React, {useContext} from 'react';
import './App.scss';
import {useSpring, animated} from 'react-spring'
import NavBar from './components/NavBar'
import { Route, Switch} from 'react-router-dom'

import { BikeContext } from './context/BikeContext';
import LandingPage from './components/LandingPage';
import MoreInfo from './components/MoreInfo';

function App() {
  const {Bikes, dispatch} = useContext(BikeContext)
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const [WhiteBack, setWhiteBack, stopWhiteBack]  = useSpring(() => ({}))


  const PartSelect = () => {

  }
  return (
    <Switch>

    <Route path="/" exact>
      <animated.div className = "App">
          <NavBar />
          <LandingPage />
      </animated.div>
    </Route>  

    <Route path="/More-Info" exact>   
      <animated.div className = "LandingWrap">
        <NavBar />
        <animated.div className = "MoreInfo" style={props}>
          <div></div>
          <MoreInfo />
        </animated.div>
      </animated.div>
    </Route>

    <Route path="/">
      <animated.div className = "App">
          <NavBar />
          <LandingPage />
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
