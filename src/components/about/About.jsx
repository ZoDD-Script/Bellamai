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
          <a href='' className='btn'>Know More</a>
        </div>
        <div className='about-container'>
          <h2 className='about-header'>
            OUR FEATURES
          </h2>
          <div className='line'></div>
          <div className=''>
            <img src={analytics} className='analytics' />
            {/* <i className='fa fa-bar-diamond' ></i> */}
            <h3 className='about-smallheader'>Mobile ready</h3>
            <p className='features-paragraph'>Lorem jndkdlin dnkjndibujhcio jnckj,kj ckjiuchicoi iucoichoicujolkicu.ncncuciuhio</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
