import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import './ViewCourt.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

function ViewCourt() {
    const navigate=useNavigate()
  return (
    <div className='Viewcourt-bg'>
      <Grid container spacing={2}>
        <Grid xs={6} md={6}>
        <Card sx={{ maxWidth: 345 }} className='turf-card' >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/icons/locker.png"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
    </Grid>
    
    <Grid xs={6} md={6}>
        <div className='turf-name'>
        <h1>Soccer</h1>
        </div>
        <div className='turf-place'>
        <p>Ernakulam</p>
        </div>
        <Stack className='turf-rating' spacing={1}>
            <Rating name="half-rating-read" defaultValue={2} precision={4} readOnly />
        </Stack>
        <div className='turf-court'>
            <div className='court-details-heading'>
                <h3>Court Availible</h3>
                <ul className='court-list'>
                    <li>5's Football</li>
                    <li>7's Football</li>
                    <li>11's Football</li>
                    <li>Cricket</li>
                </ul>
            </div>
            <button className='book-now' onClick={()=>{navigate('/slotbooking')}}>Book Now</button>
        </div>
           
          

        </Grid>
      </Grid>
      <div className='fade_bottum'></div>
      <div className='facility-card'>
        <h3>Facilities</h3>
        <div className='facility-icons'>
            <img className='icone-size' src='/icons/cafe.png'  ></img>
            <img className='icone-size' src='/icons/first-aid.png'></img>
            <img className='icone-size' src='/icons/locker.png'></img>
            <img className='icone-size' src='/icons/shower.png' ></img>
            <img className='icone-size' src='/icons/parking.png'></img>

        </div>

      </div>
    </div>
  )
}

export default ViewCourt


