import React from 'react'
import './Banner.css'
import { useNavigate } from 'react-router-dom';



function Banner() {
  const navigate = useNavigate()
  return (
    <div className='Banner'>
      <div className='Banner-image'>
        <div className='qoute'>
            <p className='qoute-content'>“The only way to prove that you’re a good sport is to lose.”</p>
            <p className='qoute-persone-name'>—Ernie Banks</p>
        </div>
        <div className='Button'>
            <div >
            <button className='button-explore' onClick={()=>{navigate('/turflist')}}>Book Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner
