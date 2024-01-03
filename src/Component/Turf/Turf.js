import React from 'react'
import './turf.css'


function Turf() {
  return (
    <div className='create'>
      <h2 className='turf'>Turf Create</h2>
      <form>
        <div className=''>
        <input className='input'  type='text' placeholder='Turf Name'></input>
        <br></br>
        <input className='input' type='text' placeholder='Location'></input>
        <br></br>
        <input  className='input' type='text' placeholder='Address'></input>
        <br></br>
        <input className='input' type='text' placeholder='PhoneNo'></input>
        <br></br>
        <button type='submit'  className='button2'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default Turf
