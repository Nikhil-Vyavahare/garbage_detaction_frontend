import React from 'react'
import AboutImg from "../assets/about-image.png"

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Our mission is to create smarter and cleaner cities through AI-powered waste monitoring.
            We use advanced computer vision and machine learning to detect garbage in real time
            from camera feeds, enabling municipalities to optimize waste collection, reduce costs,
            and ensure a greener environment.
          </p>
          <p>
            With our technology, we aim to help cities transition towards sustainable development,
            making public spaces cleaner and healthier for everyone.
          </p>
        </div>
        <div className="about-image">
          <img src={AboutImg} alt="About Garbage Detection"/>
        </div>
      </section>

      {/* How AI Detects Section */}
      <section className="ai-detect">
        <div className="ai-detect-text">
          <h2>How AI Detects Garbage</h2>
          <p>
            Our system uses <strong>computer vision and deep learning models</strong> 
            to analyze live camera feeds. When garbage is detected:
          </p>
          <ul>
            <li>📷 Camera captures real-time video</li>
            <li>🧠 AI model identifies waste objects</li>
            <li>⚡ System generates alerts & records data</li>
          </ul>
        </div>
        <div className="ai-detect-image">
          <img src="ai-detection-process.png" alt="AI Detection Process"/>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Garbage Detection. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default About
