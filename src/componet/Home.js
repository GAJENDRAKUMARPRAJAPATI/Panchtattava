import React from 'react'
import './Style.css'

const Home = () => {
  return (
    <div className='home '>
      <span>Home</span>
      <span>About us</span>
      <span>Our Healing Center</span>
      <span>Heading Center</span>
      <span>
        <select name="" >
            <option value="">Programs</option>
        </select>
      </span>
      <span>News & Media</span>
      <span>
        <select name="">
            <option value="">onLine Programs</option>
        </select>
      </span>
      <span>
        <button className='btn btn-warning '>Book Appointment</button>
      </span>
    </div>
  )
}

export default Home
