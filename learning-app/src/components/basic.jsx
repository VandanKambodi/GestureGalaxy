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
                <h2 className="b-alpha-num" >Alphabets</h2>
                <p className="b-alpha-para">Sign language uses hand gestures to represent numbers, making it accessible for communication among the Deaf and Hard of Hearing community. Below is a basic guide for signing numbers in American Sign Language (ASL).</p>
            </div>
            <div className="b-alpha-down">
                <div className="b-alpha-down-part">
                    <div className="b-alpha-left">
                            <h3>English</h3>
                            <iframe src="https://www.youtube.com/embed/FkKFYW3ZQ_w" title="single handed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="b-alpha-right">
                            <h3>Gujarati</h3>
                            <iframe src="https://www.youtube.com/embed/ZXB_8AHG0PU" title="sign Language in Gujarati Alpha bates for Deaf and Dumb people" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="b-days">
        <div className="b-part-days">
        <div className="b-days-text1">
            <h3>Days</h3>
            <p>hagshds hkjhsda jkhkjhsda jkjkaD IUWQ NMBdu kjiaS</p>
        </div>
        <div class="b-days-video-grid">
        <div class="b-days-video-item">
            <h3>Sunday</h3>
            <div class="b-days-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/nZQgs84-71M" title="sunday-3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        <div class="b-days-video-item">
            <h3>Monday</h3>
            <div class="b-days-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/R1jaD2vHFNY" title="monday-6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-days-video-item">
            <h3>Tuesday</h3>
            <div class="b-days-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/NC0iEaE7Ba4" title="tuesday-3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-days-video-item">
            <h3>Wednesday</h3>
            <div class="b-days-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/Wp4jKO4IYgU" title="wednesday-3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-days-video-item">
            <h3>Thursday</h3>
            <div class="b-days-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/IuIV6N8k4Ik" title="thursday-5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-days-video-item">
            <h3>Friday</h3>
            <div class="b-days-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/Gl6b4xJGc5k" title="friday-4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-days-video-item">
            <h3>Saturday</h3>
            <div class="b-days-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/vFAuNQe7ng8" title="saturday-3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
         <div class="b-days-video-item">
            <h3>Holiday</h3>
            <div class="b-days-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/uZuvBINbAqo" title="holiday" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        <div class="b-days-video-item">
            <h3>Birthday</h3>
            <div class="b-days-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/gZ8N1iYkH34" title="birthday" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>  
        </div>
        <div className="b-days-text2">
            <p>dfs fdgs gfds sfdgs gs</p>
        </div>
    </div>
    </div>
    
    <div className="b-color">
        <div className="b-part">
        <div className="b-color-text1">
            <h3>Colors</h3>
            <p>hagshds hkjhsda jkhkjhsda jkjkaD IUWQ NMBdu kjiaS</p>
        </div>
        <div class="b-color-video-grid">
        <div class="b-color-video-item">
            <h3>Green</h3>
            <div class="b-color-video-container">
                <iframe width="560" height="340" src="https://www.youtube.com/embed/wwQV7dGvw0s" title="Green" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-color-video-item">
            <h3>Orange</h3>
            <div class="b-color-video-container">
                <iframe width="560" height="340" src="https://www.youtube.com/embed/DlyWuMwYeVc" title="Orange" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-color-video-item">
            <h3>Brown</h3>
            <div class="b-color-video-container">
                <iframe width="560" height="340" src="https://www.youtube.com/embed/dQ30qulPHvE" title="Brown" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-color-video-item">
            <h3>Pink</h3>
            <div class="b-color-video-container">
                <iframe width="560" height="340" src="https://www.youtube.com/embed/7zKiKasH-ec" title="Pink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-color-video-item">
            <h3>Violet</h3>
            <div class="b-color-video-container">
                <iframe width="560" height="340" src="https://www.youtube.com/embed/yr0Mkvkfmi8" title="Violet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-color-video-item">
            <h3>Blue</h3>
            <div class="b-color-video-container">
                <iframe width="560" height="340" src="https://www.youtube.com/embed/N6zCu36_1xI" title="Blue" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        <div class="b-color-video-item">
            <h3>Red</h3>
            <div class="b-color-video-container">
                <iframe width="560" height="340" src="https://www.youtube.com/embed/8NqmODtSLgI" title="Red" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        <div class="b-color-video-item">
            <h3>Yellow</h3>
            <div class="b-color-video-container">
                <iframe width="560" height="340" src="https://www.youtube.com/embed/6sQeR9LXn-U" title="Yellow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        <div class="b-color-video-item">
            <h3>White</h3>
            <div class="b-color-video-container">
                <iframe width="560" height="340" src="https://www.youtube.com/embed/XOqFl-yg95M" title="White" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        </div>
        <div className="b-color-text2">
            <p>dfs fdgs gfds sfdgs gs</p>
        </div>
    </div>
    </div>

    <div className="b-months">
        <div className="b-part-months">
        <div className="b-months-text1">
            <h3>Months</h3>
            <p>hagshds hkjhsda jkh e. Each sign has an image, running video and threaded discussions. We are continually adding more signs and designing new services to empower the Deaf. Please share your ideas and comments and help us make this service better. Indiansignlanguage.org offers a huge collection of Indian Sign Language (ISL) signs. Each sign has an image, running video and threaded discussions. It is an ideal resource to use while you learn/teach Indian Sign Language. Each sign has an image, running video and threaded discussions. We are continually adding more signs and designing new services to empower the Deaf. Please share your ideas and comments and help us make this service better. Indiansignlanguage.org offers a huge collection of Indian Sign Language (ISL) sig kjhsda jkjkaD IUWQ NMBdu kjiaS</p>
        </div>
        <div class="b-months-video-grid">
        <div class="b-months-video-item">
            <h3>January</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/YRCrJpcwteg" title="january-2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        <div class="b-months-video-item">
            <h3>February</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/_yuawBKn9O0" title="february" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-months-video-item">
            <h3>March</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/IdrYzD-b0MU" title="march" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-months-video-item">
            <h3>April</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/XCsc6GXwslU" title="april" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-months-video-item">
            <h3>May</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/yXkOz_A01t0" title="may" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-months-video-item">
            <h3>June</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/18hKLmAVIMg" title="june" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
         <div class="b-months-video-item">
            <h3>July</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/jrpS8BdYE2g" title="july" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        <div class="b-months-video-item">
            <h3>August</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/dGUBX9_VN7U" title="august-2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-months-video-item">
            <h3>September</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/MVggQBRCOIw" title="september-2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-months-video-item">
            <h3>October</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/U7Y3GocRUak" title="october" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="b-months-video-item">
            <h3>November</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/GqCMtSaTMwQ" title="november" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        <div class="b-months-video-item">
            <h3>December</h3>
            <div class="b-months-video-container">
            <iframe width="560" height="340" src="https://www.youtube.com/embed/y1XgtWNM-OM" title="december" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div> 
        </div>
        <div className="b-months-text2">
            <p>dfs fdgs gfds sfdgs gs e. Each sign has an image, running video and threaded discussions. We are continually adding more signs and designing new services to empower the Deaf. Please share your ideas and comments and help us make this service better. Indiansignlanguage.org offers a huge collection of Indian Sign Language (ISL) signs. Each sign has an image, running video and threaded discussions. It is an ideal resource to use while you learn/teach Indian Sign Language. Each sign has an image, running video and threaded discussions. We are continually adding more signs and designing new services to empower the Deaf. Please share your ideas and comments and help us make this service better. Indiansignlanguage.org offers a huge collection of Indian Sign Language (ISL) sig</p>
        </div>
    </div>
    </div>

</div>
<div className="b-foot">
        <p className="b-foot-para">Indiansignlanguage.org offers a huge collection of Indian Sign Language (ISL) signs. Each sign has an image, running video and threaded discussions. It is an ideal resource to use while you learn/teach Indian Sign Language.  Each sign has an image, running video and threaded discussions.  We are continually adding more signs and designing new services to empower the Deaf.
        Please share your ideas and comments and help us make this service better. Indiansignlanguage.org offers a huge collection of Indian Sign Language (ISL) signs. Each sign has an image, running video and threaded discussions. It is an ideal resource to use while you learn/teach Indian Sign Language.  Each sign has an image, running video and threaded discussions.  We are continually adding more signs and designing new services to empower the Deaf.
        Please share your ideas and comments and help us make this service better. Indiansignlanguage.org offers a huge collection of Indian Sign Language (ISL) signs. Each sign has an image, running video and threaded discussions. It is an ideal resource to use while you learn/teach Indian Sign Language.  Each sign has an image, running video and threaded discussions.  We are continually adding more signs and designing new services to empower the Deaf.
        Please share your ideas and comments and help us make this service better. Learn sign language for different words with these short video lessons.</p>
    </div>
</div>
  )
}

export default basic