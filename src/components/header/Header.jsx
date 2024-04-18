import React from 'react'

import './header.css'
// import Button from '../../constants/button/Button'

const Header = () => {
  return (
    <div className="text-box" id='home'>
      <h1>Redefining Elevation Solutions in Africa</h1>
      <p>
      Your premier destination for state-of-the-art escalators and lifts in Lagos, Nigeria.
      </p>
      <a href="https://www.instagram.com/swiftrise.ng/" target='_blank'>
        {/* <Button text='Visit Us To Know More' style='hero-btn' /> */}
      </a>
    </div>
  )
}

export default Header