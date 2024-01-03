import { Grid } from '@mui/material'
import React from 'react'
import './SearchBook.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function SearchBook() {
  return (


    <Box sx={{ flexGrow: 1 }} className='bgcolor' >
    <Grid container spacing={0}   >
      <Grid item xs={4} md={4}>
        {/* <Item> */}

           

            <div className='search'>
                    <div className='card-title'>
                        <p>Search</p>
                        </div>
                        <div className='card-icon'>
                        <img src='/icons/search-location.png' alt="" />
                        </div>
                            <div className='card-content'>
                                <p>Are you looking to play after work, organize your Sunday Five's football match? Explore the largest network of sports facilities whole over the India</p>
                            </div>
            </div>
            
            {/* </Item> */}
                </Grid>
                <Grid item xs={4} md={4}>
                    {/* <Item> */}
                        <div className='book'>
                                <div className='card-title'>
                                    <p>Book</p>
                                    </div>
                                    <div className='card-icon'>
                                        <img src='/icons/calendar.png' alt="" />
                                        </div>
                                        <div className='card-content'>
                                            <p>Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment</p>
                                        </div>
                        </div>
                    {/* </Item> */}
                </Grid>

                <Grid item xs={4} md={4}>
                    {/* <Item> */}
                    
                                <div className='card-title' style={{width:'5rem'}}>
                                    <p>Play</p>
                                    </div>
                                    <div className='card-icon' style={{width:'5rem'}}>
                                    <img src='/icons/football.png' alt="" />                                        </div>
                                        <div className='card-content'>
                                            <p>You’re the hero, you’ve found a stunning turf or court, booked with ease and now its time to play. The scene is set for your epic match.</p>
                                        </div>
                       
                        {/* </Item> */}
                </Grid>
    </Grid>
  </Box>







    

  )
}

export default SearchBook
