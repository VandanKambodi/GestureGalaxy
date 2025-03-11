import React from "react";
import './basic.css';
import { Link } from 'react-router-dom'
const basic = () => {
  return (
    <div className="ball">
    <div class="container">
    <h2 className="bhead">Basic Sign Language Lessons</h2>
    <p className="basic-top-para">Learn sign language for different words with these short video lessons.</p>
    
    <div className="b-num-all">
    <div className="basic-num">
      <div className="b-num-left"></div>
        <div className="b-text">
          <h2 className="b-num" >Numbers</h2>
          <p className="b-para">Sign language uses hand gestures to represent numbers, making it accessible for communication among the Deaf and Hard of Hearing community. Below is a basic guide for signing numbers in American Sign Language (ASL).</p>
        </div>
      <div className="b-num-right"></div>
          <iframe src="https://www.youtube.com/embed/ZXqhw1b6_DY" title="numbers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
    {/* <div class="video-grid">
        <div class="video-item">
            <h3>Hello</h3>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/your-video-id1" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-item">
            <h3>Thank You</h3>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/your-video-id2" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-item">
            <h3>Goodbye</h3>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/your-video-id3" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-item">
            <h3>Sorry</h3>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/your-video-id4" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-item">
            <h3>Yes</h3>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/your-video-id5" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-item">
            <h3>No</h3>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/your-video-id6" frameborder="0" allowfullscreen></iframe>
            </div>
        </div> */}
    {/* </div> */}
</div>
</div>
  )
}

export default basic