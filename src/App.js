/* eslint-disable */

import { useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import './App.scss';
import Olmal from './olmal/olmal.js';
import {Helmet} from 'react-helmet';


function App() {
  const location = useLocation();
  console.log(location.pathname)


  return (
    <div className="App">

      <NavBar location={location}/>

      <Route exact path="/">
        <img className='mainLogo' src='./images/logo1.jpg' alt='olliggamalgga' />
        <Title />
        <img className='imageLogo' src='./images/logo2.png' alt='olmal' />
        <Link to="/olmal"><button className='startBtn'>시작 해보기</button></Link>
      </Route>

      <Route exact path="/olmal">
        <Olmal />
      </Route>

    </div>
  );
}

function NavBar(props) {
  return (
    <div className='navContainer'>
      { 
        props.location.pathname == '/olmal'
        ? <Link to="/"><img className='logo1' src='./images/logo1.jpg' alt='logo1' /></Link>
        : null
      }
      <img className='heart' src='./images/heart.jpg' alt='heart' />
      <img className='plane' src='./images/plane.jpg' alt='plane' />
    </div>
  )
}

function Title() {
  return (
    <div className='title'>
      <h3>올릴까 말까</h3>
      <p>AI가 알려주는 나의 인스타 갬성지수</p>
    </div>
  )
}


export default App;
