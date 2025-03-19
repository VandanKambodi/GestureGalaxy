import React from 'react'
import './premium.css'
import { Link } from 'react-router-dom'
import './Home.jsx'
const premium = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-grid">
        <div className="pricing-left-panel">
          <h3> <span className="highlight">Get Your Plans</span></h3>
          <p>As a LITE user, you still get valuable learning tools to improve your sign language skills at your own pace.</p>
          <p>As a PLUS user, you have access to the most comprehensive sign language learning experience. With expert guidance, live sessions, and exclusive resources,
             you can master sign language with confidence.</p>
          <a href="./home"><img src="./logo1.png" alt="Gesture Galaxy Logo" className="pricing-bot-image" /></a>
        </div>

        <div className="pricing-plan pricing-lite">
          <h3>Lite</h3>
          <p>Free <span className="restriction">with restrictions</span></p>
          <p><h2>This is for you that are beginning to explore sign language </h2></p>
          <br /><br />
          <ul>
            <li>✔ Video Tutorials.</li>
            <li>✔ Accessible Resources.</li>
            <li>✔ No Certification available.</li>
            <li>✔ Quizzes with Progress.</li>
            <li>✔ English-to-Gujarati translation.</li>
            <li>✔ Free, for always.</li>
          </ul>
          <button className="pricing-button">Get Free</button>
        </div>

        <div className="pricing-plan pricing-pro">
          <h3>Pro</h3>
          <p>29$ <span className="monthly">monthly</span></p>
          <p><h2>This is for you that want to learn and reach your goals faster.</h2></p>
          <br /><br />
          <ul>
            <li>✔  Advanced Sign Language Lessons </li>
            <li>✔  Ad-free experience </li>
            <li>✔  Live Sessions with Experts </li>
            <li>✔  Interactive Quizzes & Certification</li>
            <li>✔  Achieved chat without limits</li>
            <li>✔  Private Community Access </li>
          </ul>
          <button className="pricing-button">Get Pro plan</button>
        </div>
      </div>
    </div>
  )
}
export default premium
