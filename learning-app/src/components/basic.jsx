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
    <div className="basic-num-part">
        <div className="b-num-left">
        {/* <div className="b-text"> */}
          <h2 className="b-num" >Numbers</h2>
          <p className="b-para">Sign language uses hand gestures to represent numbers, making it accessible for communication among the Deaf and Hard of Hearing community. Below is a basic guide for signing numbers in American Sign Language (ASL).</p>
        {/* </div> */}
        </div>
        <div className="b-num-right">
          <iframe src="https://www.youtube.com/embed/ZXqhw1b6_DY" title="numbers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    </div>
    
    <div className="b-alpha">
        <div className="b-alpha-part">
            <div className="b-alpha-up">
                <h2 className="b-num" >Numbers</h2>
                <p className="b-para">Sign language uses hand gestures to represent numbers, making it accessible for communication among the Deaf and Hard of Hearing community. Below is a basic guide for signing numbers in American Sign Language (ASL).</p>
            </div>
            <div className="b-alpha-down">
                <div className="b-alpha-down-part">
                    <div className="b-alpha-left">
                        <div className="b-alpha-left-para">
                            <h3>English</h3>
                        </div>
                        <div className="b-alpha-left-video">
                            <iframe src="https://www.youtube.com/embed/FkKFYW3ZQ_w" title="single handed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="b-alpha-right">
                        <div className="b-alpha-right-para">
                            <h3>Gujarati</h3>
                        </div>
                        <div className="b-alpha-right-video">
                            <iframe src="https://www.youtube.com/embed/ZXB_8AHG0PU" title="sign Language in Gujarati Alpha bates for Deaf and Dumb people" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
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