import React from 'react'
import Hero from '../assets/hero-image.png'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>AI-Powered Waste Monitoring<br/>for Smarter Cities</h1>
          <p className="fade-in-delay">
            Our AI-powered system detects garbage in real time using camera feeds, helping
            cities optimize waste collection, reduce costs, and create cleaner, greener environments.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src={Hero} 
            alt="Garbage Detection Illustration" 
            className="fade-in-delay zoom-img" 
            style={{animationDelay: "1s"}} 
          />
        </div>
      </section>

      {/* New Section: Smart Garbage Detection */}
      <section className="features">
        <h1>Smart Garbage Detection</h1>
        <p>AI-powered waste detection with futuristic UI</p>
        <div className="cards">

          <div className="card">
            <div className="icon">
              {/* Eye SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="#00ff99" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h2>AI Vision</h2>
            <p>Smart AI vision for efficient garbage management.</p>
          </div>

          <div className="card">
            <div className="icon">
              {/* Analytics SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="#00ff99" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 3v18h18"/>
                <path d="M18 17V9M13 17V5M8 17v-3"/>
              </svg>
            </div>
            <h2>Analytics</h2>
            <p>Smart analytics for efficient garbage management.</p>
          </div>

          <div className="card">
            <div className="icon">
              {/* Bell SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="#00ff99" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </div>
            <h2>Alerts</h2>
            <p>Smart alerts for efficient garbage management.</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home
