import { Box } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import './Payment.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Payment() {
    const boldText = {
        fontWeight: 'bold'
    }
  return (
    <div>
      <div className='payment'>
        <h2 >Payment</h2>
        <hr></hr>
        </div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={6} md={6}>
        <Card sx={{ maxWidth: 500 ,marginLeft:'2rem',width:'90rem'}} className='payment-card' >
        <CardContent>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
             <Grid item xs={6} md={8}>
             <CardMedia
                sx={{ height: 170,width:'15rem '}}
                image="/image/adidasFootball.jpg"
                title="green iguana"/>   
             </Grid>
            <Grid item xs={6} md={4}>
                <h2 style={{marginBlockEnd:'-1rem',marginLeft:'0.6rem'}}>Soccer</h2>
                <h4 style={{marginBlockEnd:'0.3rem',marginLeft:'0.6rem'}}>Kozhikode</h4>
                <div style={{display:'flex'}}><img style={{width:'3rem',height:'2rem'}} src='/icons/calendar.icon.jpg' /><p style={{marginBlockStart:'0.4rem'}}>01/12/2023</p></div>
                <div style={{display:'flex'}}><img style={{width:'1.7rem',height:'1.5rem',marginLeft:'0.6rem'}} src='/icons/time.jpg' /><p style={{marginBlockStart:'0.1rem',marginLeft:'0.5rem'}}>8PM - 9PM</p></div>
            </Grid>
        </Grid>
        </Box>
        <hr></hr>
            <div style={{display:'flex',marginBlockEnd:'-1.7rem'}}><h4>Price</h4><h4 style={{marginLeft:'23rem'}}>/1000</h4></div>
            <div style={{display:'flex',marginBlockEnd:'-1.7rem'}}><h4>Taxes&Fees</h4><h4 style={{marginLeft:'20rem'}}>/20</h4></div>
            <div style={{display:'flex'}}><h4>State Goods and Service Tax</h4><h4 style={{marginLeft:'13rem'}}>/30</h4></div>
            <hr></hr>
            <div style={{display:'flex'}}><h4>Total</h4><h4 style={{marginLeft:'23rem'}}>/1050</h4></div>
      </CardContent>
    </Card>
        </Grid>

        
        <Grid item xs={6} md={4}>
            <button className='button-razorpay'>Pay With Razorpay</button>
          <br/>
          <button className='button-razorpay'>Pay With paypal</button>

        </Grid>
      </Grid>
    </Box>
      
    </div>
  )
}

export default Payment
