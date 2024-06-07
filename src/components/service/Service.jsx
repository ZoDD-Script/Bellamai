import React from 'react'
import { chair, chair1, chair2, chair3, chair4 } from '../../assets'
import './service.css'

const Service = () => {
  return (
    <div className='service'>
    <section className='service-section'>
      <h2 className='service-header'>
        Why Choose BELLA MAI DESIGNS? <br /> Let Us Transform Your Space.
      </h2>
      <div className='service-container'>
        <div className='service-card'>
          <img src={chair1} alt='' className='service-img' />
          <h5 className=''>Power and Energy</h5>
        </div>
        <div className='service-card'>
          <img src={chair3} alt='' className='service-img' />
          <h5 className=''>Power and Energy</h5>
        </div>
        <div className='service-card'>
          <img src={chair4} alt='' className='service-img' />
          <h5 className=''>Power and Energy</h5>
        </div>
        <div className='service-card'>
          <img src={chair2} alt='' className='service-img' />
          <h3 className=''>Power and Energy</h3>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Service
