import React from 'react'
import './premium.css'
import { Link } from 'react-router-dom'
import './Home.jsx'
const premium = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-grid">
        <div className="pricing-left-panel">
          <h2>Save your <span className="highlight">money now.</span></h2>
          <p>Manage your company Bot in few easy steps, join our Pro plan to try a 360° experience of our service.</p>
          <p>Start your 14 days of free Pro plan, you can always upgrade it or stay with the Lite version for free.</p>
          <img src="./logo1.png" alt="Gesture Galaxy Logo" className="pricing-bot-image" />
        </div>

        <div className="pricing-plan pricing-lite">
          <h3>Lite</h3>
          <p>Free <span className="restriction">with restrictions</span></p>
          <ul>
            <li>✔ Manage conversations directly from your website.</li>
            <li>✔ Bot without the AI service.</li>
            <li>✔ Achieved chat for 30 days.</li>
            <li>✔ Free, for always.</li>
          </ul>
          <button className="pricing-button">Start 14 days of free Pro plan</button>
        </div>

        <div className="pricing-plan pricing-pro">
          <h3>Pro</h3>
          <p>29$ <span className="monthly">monthly</span></p>
          <ul>
            <li>✔ Bot with AI that can recognize the user's behaviour and can automatize the sentences.</li>
            <li>✔ Unlimited conversational flows.</li>
            <li>✔ Facebook, Twitter, Instagram and Linkedin integration.</li>
            <li>✔ Achieved chat without limits.</li>
          </ul>
          <button className="pricing-button">Start 14 days of free Pro plan</button>
        </div>
      </div>
    </div>
  )
}
export default premium
