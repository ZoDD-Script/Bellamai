import React from 'react'
import './footer.css'
import { logo } from '../../assets'
import { socialMedia } from '../../constants'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="row">
        <div className="col">
          <img src={logo} alt="" className='logo' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vero officia nemo qui voluptates iusto expedita delectus deserunt quas perferendis nulla commodi aliquam enim deleniti, ipsa quaerat. Est, eos ex.</p>
        </div>
        <div className="col">
          <h3>Office <div className="underline"><span></span></div></h3>
          <p>ITPL Road</p>
          <p>Whitefield, Bangalore</p>
          <p>Karnataka, PIN 6575857, India</p>
          <p className="email_id">prerciswlighting@preciselighting.ng</p>
          <h4>+234 - 909557588476</h4>
        </div>
        <div className="col">
          <h3>Links <div className="underline"><span></span></div></h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Servive</a></li>
            <li><a href="">Clients</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter <div className="underline"><span></span></div></h3>
          <form action="">
            <input type="email" placeholder='Enter your email id' required />
          </form>
          <div className="social_icons">
            {socialMedia.map((social, index) => (
              <img key={social.id} src={social.icon} alt={social.id} className='' />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <p className='copyright'>2024 © Bella Mai Designs - All Rights Reserved</p>
    </div>
  )
}

export default Footer