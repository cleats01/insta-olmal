/* eslint-disable */

import {React, useState } from 'react';
import './olmal.scss';
import $ from 'jquery';


function Olmal(props) {
  const [heart,setHeart] = useState('heart.jpg');
  const onCapture = props.onCapture;

  return (
    <div className='Olmal'>
      <Story />
      <MyName />
      <MainContent heart={heart} setHeart={setHeart} onCapture={onCapture}/>
    </div>
  )
}

function Story() {
  return (
    <div className="story-container">
      <ul className="story-circles">
          <li>
              <img src="./images/agt.png" alt="1k" />
              <span>Team_agt</span>
          </li>
          <li>
            <img src="./images/hwprofile.png" alt="10k" />
            <span>HW_Kwon</span>
          </li>
          <li>
            <img src="./images/꼬부기.png" alt="100k" />
            <span>TG_Kim</span>
          </li>
          <li>
            <img src="./images/이상해씨.png" alt="1000k" />
            <span>WY_Jung</span>
          </li>
      </ul>
    </div>
  )
}

function MyName() {
  return (
    <div className="my-name-container">
      <img className="profile" src="./images/agt.png" alt="myProfile" />
      <span>profile_name</span>
      <img className="badge" src="./images/blue.jpg" alt="badge" />
    </div>
  )
}

function MainContent(props) {
  return (
    <div className='mainContent'>

      <div className="container file-upload">
        <div className="image-upload-wrap">
            <input className="file-upload-input" type='file' onChange={(e)=>{readURL(e.target)}} accept="image/*" />
            <div className="drag-text">
                <h3 className="upload-text">
                  여기에 사진을 업로드 하세요!<br/><br/>
                  <strong>TIP! :</strong><br/>
                  <div className='tip'>
                    <strong>인물 사진을</strong> 넣어주세요<br/>
                    <strong>전신샷</strong>을 가장 정확히 분석합니다<br/>
                    사진은 <strong>절대</strong> 저장되지 않습니다
                  </div>
                </h3>
            </div>
        </div>

        <div className="file-upload-content">
            <img className="file-upload-image" id="insta-photo" src="#" alt="your image" />
            <div id="loading" className="animated bounce">
                <p className="text-center">AI가 사진의 감성지수를 파악중입니다.</p>
            </div>
        </div>
      </div>

      <div className="bottom-icons-container">
            <img src={'./images/' + props.heart } onClick={()=>{props.setHeart('red-heart.png')}} alt="heart" className="heart" />
            <img src="./images/camera.png" alt="camera" className="plane" onClick={props.onCapture}/>            
            <img src="./images/retry.png" alt="try-again" className="try-again-btn" onClick={()=>{window.location.reload()}} />
      </div>

      <div className="result">
        <div id="label-container"></div>
        <p className="result-message"></p>
      </div>

    </div>
  )
}



export default Olmal;