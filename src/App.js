/* eslint-disable */

import { useEffect, useState } from 'react';
import { Link, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Olmal from './olmal/olmal.js';
import html2canvas from 'html2canvas';


function App() {
  const location = useLocation();
  const [heart,setHeart] = useState('heart.jpg');

  const onCapture = () => {
    html2canvas(document.getElementById('div')).then(canvas=>{
      onSaveAs(canvas.toDataURL('image/png'), 'olmal.png')
    });
  };


  const onSaveAs = (uri,filename) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  function copyUrl () {
    const tempElement = document.createElement("textarea");
    document.body.appendChild(tempElement);
    tempElement.value = "https://agt-olmal.netlify.app/";
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    alert('올릴까 말까의 주소가 클립보드에 복사되었습니다.');
  }




  return (
    <div className="App" id='div' >

      <NavBar location={location} heart={heart} setHeart={setHeart} copyUrl={copyUrl}/>

      <Route exact path="/">
        <img className='mainLogo' src='./images/logo1.jpg' alt='olliggamalgga' />
        <Title />
        <img className='imageLogo' src='./images/logo2.png' alt='olmal' />
        <Link to="/olmal"><button className='startBtn'>시작 해보기</button></Link>
      </Route>

      <Route exact path="/olmal">
        <Olmal onCapture={onCapture} />
      </Route>

      <ins className="kakao_ad_area" style={{display: 'none'}} 
        data-ad-unit    = "DAN-qUn5VMvCqsATkbNB" 
        data-ad-width   = "320" 
        data-ad-height  = "100">
      </ins> 

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
      <img className='heart' src={'./images/' + props.heart } onClick={()=>{props.setHeart('red-heart.png')}} alt='heart' />
      <img className='plane' src='./images/plane.jpg' onClick={()=>{props.copyUrl()}} alt='plane' />
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
