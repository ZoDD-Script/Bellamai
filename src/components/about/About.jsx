import React from 'react'
import { about, analytics } from '../../assets'
import './about.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <div className='about'>
      <section className='about-us' id='about-us'>
        <div className='about-image-container about-container'>
          <img src={about} alt='' className='about-img' />
        </div>
        <div className='about-container'>
          <h2 className='about-header'>
            WE ARE BELLA MAI    
          </h2>
          <div className='line'></div>
          <p className='about-paragraph'>
            As a distinguished extension of the renowned Precise brand, we bring together unmatched rxpertise and creativity in the realm of home and office aesthetics. Our dedication goes beyound offering products; we aim to transform your spaces with innovative designs, quality craftmanship, and personalized service.
          </p>
          <ul className='list-style'>
            <li>Creative solutions for contemporary living.</li>
            <li>Sustainability and quality at its core.</li>
            <li>Collaborative design excellence.</li>
            <li>Unwavering commitment to innovation and elegance.</li>
          </ul>
          <a target='blank' href='https://www.instagram.com/bellamai.designs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='btn'>Know More</a>
        </div>
        <div className='about-container'>
          <h2 className='about-header'>
            OUR FEATURES
          </h2>
          <div className='line'></div>
          <div className='about-features'>
            <img src={analytics} className='analytics-img' />
            {/* <i className='fa fa-bar-diamond' ></i> */}
            <div>
              <h3 className='about-smallheader'>Comprehensive Warranty</h3>
              <p className='features-paragraph'>We stand by our designs with a robust warraty, ensurimg durability and satisfaction.</p>
            </div>
          </div>
          <div className='about-features'>
            <img src={analytics} className='analytics-img' />
            {/* <i className='fa fa-bar-diamond' ></i> */}
            <div>
              <h3 className='about-smallheader'>Tailored Deals and Offers</h3>
              <p className='features-paragraph'>Our attractive offers are crafted to fit your unique needs, ensuring that our partnershp is both rewarding and fulfilling.</p>
            </div>
          </div>
          <div className='about-features'>
            <img src={analytics} className='analytics-img' />
            {/* <i className='fa fa-bar-diamond' ></i> */}
            <div>
              <h3 className='about-smallheader'>Looking forward</h3>
              <p className='features-paragraph'>We are excited to embark on this design journey with you, aiming to not just meet but exceed your expectations, and to create together spaces of enduring beauty.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
