import React from 'react'
import './UserProfile.css'
import { Grid } from '@mui/material'


function UserProfile() {
  return (
    <div className='UserProfile'>
        <Grid container spacing={0}>
        <Grid item xs={6} md={6}>
        <div className='avatar'>
        <img  src='/icons/avatar.png' />
        </div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div className='user-details'>
          <h4 style={{marginBlockEnd:'-1rem'}}>Salman</h4>
          <h5 style={{marginBlockEnd:'-1rem'}}>salman@gmail.com</h5>
          <h5>+91 9744808136</h5>
          </div>
        </Grid>
        </Grid>

        <div className='Booking'>
            <h2 style={{ marginLeft:'2rem' , paddingTop:'1rem'}}>Booking</h2>
            <hr/>
            <div className='Booking-details'>
                <h2 style={{paddingTop:'1rem' , marginLeft:'1rem' , marginBlockEnd:'-0.7rem'}}>Soccer</h2>
                <h5 style={{marginLeft:'1rem' , marginBlockEnd:'0.5rem'}}>Kozhikode</h5>
                <div style={{display:'flex'}}><img style={{width:'2rem' , marginLeft:'0.7rem' , height:'2rem'}} src='/icons/calendar.icon.jpg'/><p style={{marginBlockStart:' 0.5rem'}}>12/02/2023</p></div>
                <br/>
                <div style={{display:'flex' , marginTop: '-1.5rem'}}><img style={{width:'1.3rem' , height: '2rem', marginLeft:'1rem' , }} src='/icons/time.jpg'/><p style={{marginBlockStart:' 0.2rem',marginLeft: '0.5rem'}}>7PM-11PM</p></div>
                
                
            </div>
        </div>
     

    </div>
  )
}

export default UserProfile

