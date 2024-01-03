import React from 'react'
import './UserReviewRating.css'
import Rating from '@mui/material/Rating';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


function UserReviewRating() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#2B7754'),
        width: '9rem',
        marginTop: '2rem',
        margin: '1rem 0',
        backgroundColor: '#2B7754',
        '&:hover': {
            backgroundColor: '#2B7754',
        },
    }));
    
  return (
    <div>
      <div className='Review-Rating-Card'>
        <div className='review-rating-head'>
            <h3>Rating and Reviews</h3>
        </div>
        <div className='review-enter'>
            <div className='rating-star'>
            <Rating name="simple-controlled"/>
            </div>
            <div className='review-input'>
            <TextField  sx={{width:'100%',maxWidth:'100%',}}  placeholder='Enter Your Reviews.....'  />
            <div className="review-submit">
                    <ColorButton >Submit</ColorButton>
                </div>
        </div>
        </div>
        <div className='review-ist'>

       
            <div className="review-list-username">
            <h4>salman</h4>
            </div>
            <div className="review-list-rating">
            <Rating name="read-only"  readOnly />
            </div>
            <div className="review-list-review">
            <p>gookdnvlmd vksjdv ksj m ksjbvkbhHBsakjsbkvjbkskmskjb</p>
            </div>
            <hr></hr>

            <div className="review-list-username">
            <h4>Faris</h4>
            </div>
            <div className="review-list-rating">
            <Rating name="read-only"  readOnly />
            </div>
            <div className="review-list-review">
            <p>gookdnvlmd vksjdv ksj m ksjbvkbhHBsakjsbkvjbkskmskjb</p>
            </div>
            <hr></hr>
        

        </div>
       

      </div>
    </div>
  )
}

export default UserReviewRating
