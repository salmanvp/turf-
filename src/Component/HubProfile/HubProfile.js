import React from 'react'
import './HubProfile.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function HubProfile() {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        
        
      ];
  return (
    <div className='Hub'>
        <div className='HubProfile'>
            <h3 style={{marginLeft:'2rem' , paddingTop:'1rem'}}>HUB POFILE</h3>
        </div>
      <div className='soccer'>
        <h2 style={{marginLeft:'8rem'}}>SOCCER</h2>
        <button className='edit_button'>EDIT PROFILE</button>
      </div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={6}>
        <Grid item xs={6} md={6}>
        <ImageList sx={{ width: 400, height: 400 ,marginLeft:"10rem",marginTop:"2rem"}} cols={2} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} style={{width:'12rem'}}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
        </Grid>
        <Grid item xs={4} md={4}>
          <div className='Hub-address-table'>
                <h3 style={{marginLeft:'1rem',paddingTop:'1rem'}}>Address</h3>
            <div className='Hub-address'>
            <div style={{display:"flex"}}><img style={{width:"1.5rem",height:'1.5rem',}} src='/icons/Location-icon.png' />
            <h4 style={{marginBlockStart:"0.2rem",marginLeft:'0.5rem',marginBlockEnd:'0rem'}}>Edappalli Road,Kalmassery</h4>
            </div>
            <h4 style={{marginLeft:'2rem',marginBlockStart:'0.5rem'}}>Near Police Station</h4>
            <div style={{display:"flex"}}><img style={{height:"1.5rem",width:'1.5rem'}} src='/icons/phone-call.webp' />
            <h4 style={{marginBlockStart:"0.1rem",marginLeft:'0.5rem',marginBlockEnd:'0rem'}}>+91 8714917181</h4></div>
            <h4 style={{marginLeft:'2rem',marginBlockStart:'0.5rem'}}>+91 9744808136</h4>
            <div style={{display:'flex'}}><img style={{width:'1.3rem',height:"1.3rem"}} src='/icons/link-icon.png'/>
            <h4 style={{marginLeft:'0.9rem',marginBlockStart:'0.2rem'}}>WWW.SOCCER.SPORTS</h4>
            </div>
            </div>
          </div>

          <div className='hub-court-table'>
          <h2 style={{marginLeft:'1rem',paddingTop:'1rem',marginBlockEnd:'0rem'}}>Courts</h2>
          <div style={{display:'flex'}}>
            <h3 style={{marginLeft:'2rem'}}>5s Football</h3>
            <h3 style={{marginLeft:'4rem'}}>7s Football</h3>
          </div>
          <h3 style={{marginLeft:'2rem',marginBlockStart:'0rem'}}>Cricket</h3>
          </div>
        </Grid>
        
      </Grid>
    </Box>
      

      <div>
      

      </div>
    </div>
  )
}

export default HubProfile
