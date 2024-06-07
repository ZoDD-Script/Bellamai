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
          <p>At BELLA MAI DESIGNS by Precise, we don't just sell furniture and offer desig services; we provide a commitment - a commitment to quality, cretivity, and partnership. Join us in this journey to revolutionize furnitureand interior designs, where your vision is our mission.</p>
        </div>
        <div className="col">
          <h3>Office <div className="underline"><span></span></div></h3>
          <p>15A Emma Abimbola Cole</p>
          <p>Lekki Phase 1</p>
          <p>Lagos, Nigeria</p>
          <p className="email_id">sales@preciselighting.com</p>
          <h4>+234 - 9037944292</h4>
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
              <a target='blank' href={social.link}><img key={social.id} src={social.icon} alt={social.id} className='' /></a>
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