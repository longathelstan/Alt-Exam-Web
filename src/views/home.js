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
        <a href="https://github.com/longathelstan/Alt-Exam-Web/releases/download/iuhaanhhcuc/Alt-Exam-TP_1.1.0_x64_en-US.msi">
          <button type="button" className="home-button button">
            Alt-Exam-TP
          </button>
        </a>
        <a href='https://github.com/longathelstan/Alt-Exam-Web/releases/download/iuhaanhhcuc/Alt-Exam-SP_1.1.0_x64_en-US.msi'>
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
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@dhacbhm" data-unique-id="dhacbhm" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@dhacbhm?refer=creator_embed">@dhacbhm</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  )
}

export default Home
