import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Alt-Exam</title>
        <meta property="og:title" content="Alt-Exam" />
      </Helmet>
      <img alt="image" src="/8351171-1500w.gif" className="home-image" />
      <div className="home-container1">
        <img alt="image" src="/alt-exam-300h.png" className="home-image1" />
        <span className="home-text">Alt-Exam</span>
        <div className="home-container2">
          <button type="button" className="home-button button">
            Alt-Exam-TP
          </button>
          <button type="button" className="home-button1 button">
            Alt-Exam-SP
          </button>
          <button type="button" className="home-button2 button">
            Authentication
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
