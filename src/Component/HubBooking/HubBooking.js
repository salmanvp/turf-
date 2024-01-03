import React from 'react'
import './HubBooking.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function HubBooking() {
   
  return (
    <div className='table'>
       <table>
        <div className='heading-row'>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
        <Grid item xs={2} md={2}>
          <h3 style={{paddingLeft:"1rem"}}>No</h3>
          <div className='booking-data'>
            <h4>1</h4>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
        <h3 style={{paddingLeft:"1rem"}}>User</h3>
        <div className='booking-data'>
            <h4>Salman</h4>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
        <h3 style={{paddingLeft:"1rem"}}>Date</h3>
        <div className='booking-data'>
            <h4>07/12/2023</h4>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
        <h3 style={{paddingLeft:"1rem"}}>Time</h3>
        <div className='booking-data'>
            <h4>7PM TO 8PM</h4>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
        <h3 style={{paddingLeft:"1rem"}}>Status</h3>
        <div className='booking-data'>
            <h4>Paid</h4>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
        <h3 >Approve</h3>
        <div className='booking-data'>
            <h4>1</h4>
          </div>
        </Grid>
        </Grid>
        </Box>

        </div>
      
       </table>

    </div>
  )
}

export default HubBooking
