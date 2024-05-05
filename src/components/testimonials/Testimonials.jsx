import React from 'react'
import { feedback } from '../../constants'
import './testimonials.css'
import FeedBackCard from './card/FeedBackCard'
import { pic1 } from '../../assets'

const Testimonials = () => {
  return (
    <section className="testimonials" id='testimonies'>
      <div className='section__container'>
        <div className="testimonials__header">
          <p>TESTIMONIALS</p>
          <h1>What our clients say about us.</h1>
        </div>
        <div className="testimonials__grid">
          <div className="card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
              I've been working with these guys for a long time and I can say that
              my house is in the perfect hands.
            </p>
            <hr />
            <img src={pic1} alt="user" />
            <p className="name">Allan Collins</p>
          </div>
          <div className="card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
              Working with Sentry Oak is just great, every problem in my house is
              solved in a matter of days.
            </p>
            <hr />
            <img src={pic1} alt="user" />
            <p className="name">Clay Washington</p>
          </div>
          <div className="card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
              Once a pipe burst in my kitchen and an hour later it was already
              repaired, thanks to Sentry Oak.
            </p>
            <hr />
            <img src={pic1} alt="user" />
            <p className="name">Tanya Grant</p>
          </div>
        </div>
        <div className="footer">
          <h4>No two homes are alike!</h4>
          <p>
            Our Elite network, combined with your personal needs, allows us to
            create a home plan specifically tailored to you.
          </p>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials