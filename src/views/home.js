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
        <a href="https://github.com/longathelstan/Alt-Exam-Web/releases/download/Release/Alt-Exam-TP_1.0.0_x64_en-US.msi" target="_blank">
          <button type="button" className="home-button button">
            Alt-Exam-TP
          </button>
        </a>
        <a href='https://github.com/longathelstan/Alt-Exam-Web/releases/download/Release/Alt-Exam-SP_1.0.0_x64_en-US.msi' target='_blank'>
          <button type="button" className="home-button1 button">
            Alt-Exam-SP
          </button>
        </a>
        <a href='https://github.com/longathelstan/Alt-Exam-Web/releases/download/Release/Authentication.exe'>
          <button type="button" className="home-button2 button">
            Authentication
          </button>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Home
