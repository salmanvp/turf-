import React from 'react'
import './TurfList.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';


function TurfList() {
  const navigate=useNavigate()
 
  return (
    <div className='card' >
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
        <div>
        <CardMedia
          component="img"
          height="140"
          image="url(https://images.unsplash.com/photo-1620923090109-30f2e2b2e84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h5 className='soccer-name'>Soccer</h5>
            <Typography variant="body2" color="text.secondary">
             <h3 className='soccer-place'>Kozhikode</h3>
             <Rating name="half-rating-read" defaultValue={2} precision={4} readOnly />
            </Typography>
           <button className='viewbutton' onClick={()=>{navigate('/viewcourt')}}>View</button>
          </Typography>
        </CardContent>
        </div>
     
    </Card>
    </Grid>
        <Grid item xs={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
        <div>
        <CardMedia
          component="img"
          height="140"
          image="public/image/sven-kucinic-Z0KjmjxUsKs-unsplash.jpg"
        
        />
         <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h5 className='soccer-name'>Soccer</h5>
            <Typography variant="body2" color="text.secondary">
             <h3 className='soccer-place'>Kozhikode</h3>
             <Rating name="half-rating-read" defaultValue={2} precision={4} readOnly />
            </Typography>
           <button className='viewbutton'>View</button>
          </Typography>
        </CardContent>
        </div>
      </Card>
      </Grid>
        <Grid item xs={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
      <div>
        <CardMedia
          component="img"
          height="140"
          image='C:\Users\HP\TurfReact\frontend\public\image\sven-kucinic-Z0KjmjxUsKs-unsplash.jpg'
          alt="green iguana"
        />
       <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h5 className='soccer-name'>Soccer</h5>
            <Typography variant="body2" color="text.secondary">
             <h3 className='soccer-place'>Kozhikode</h3>
             <Rating name="half-rating-read" defaultValue={2} precision={4} readOnly />
            </Typography>
            <button className='viewbutton'>View</button>
          </Typography>
        </CardContent>
        </div>
      </Card>
      </Grid>


        <Grid item xs={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
      <div>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
       <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h5 className='soccer-name'>Soccer</h5>
            <Typography variant="body2" color="text.secondary">
             <h3 className='soccer-place'>Kozhikode</h3>
             <Rating name="half-rating-read" defaultValue={2} precision={4} readOnly />
            </Typography>
            <button className='viewbutton'>View</button>
          </Typography>
        </CardContent>
        </div>
      </Card>
      </Grid>

      <Grid item xs={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
      <div>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
       <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h5 className='soccer-name'>Soccer</h5>
            <Typography variant="body2" color="text.secondary">
             <h3 className='soccer-place'>Kozhikode</h3>
             <Rating name="half-rating-read" defaultValue={2} precision={4} readOnly />
            </Typography>
            <button className='viewbutton'>View</button>
          </Typography>
        </CardContent>
        </div>
      </Card>
      </Grid>
      </Grid>
    </Box>

    </div>
  )
}

export default TurfList
