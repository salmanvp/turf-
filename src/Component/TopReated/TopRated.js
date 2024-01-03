import React from 'react'
import './TopRated.css'
import Rating from '@mui/material/Rating';


function TopRated() {
  return (
    
      <div className='TopRated'>
        <div style={{marginLeft:'1.5rem',paddingTop:"1rem"}}><h2>TOP RATED</h2></div>
         <div className='Card'>
            <div>
            <img className='Card-image' src='https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb3RiYWxsfGVufDB8fDB8fHww'  />
            <h2 className='TopRate-name'>Soccer</h2>
            <p className='TopRate-place'>Kozhikode</p>
            <div className='TopRate-star'>
            <Rating name="half-rating-read" defaultValue={5} precision={4} size='small' readOnly />
            </div>
            </div>

            <div>
            <img className='Card-image' src='https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb3RiYWxsfGVufDB8fDB8fHww'  />
            <h2 className='TopRate-name'>Soccer</h2>
            <p className='TopRate-place'>Kozhikode</p>
            <div className='TopRate-star'>
            <Rating name="half-rating-read" defaultValue={2} precision={4} size="small" readOnly />
            </div>
            </div>
            
            <div>
            <img className='Card-image' src='https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb3RiYWxsfGVufDB8fDB8fHww'  />
            <h2 className='TopRate-name'>Soccer</h2>
            <p className='TopRate-place'>Kozhikode</p>
            <div className='TopRate-star'>
            <Rating name="half-rating-read" defaultValue={2} precision={4} size="small" readOnly />
            </div>
            </div>

            <div>
            <img className='Card-image' src='https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb3RiYWxsfGVufDB8fDB8fHww'  />
            <h2 className='TopRate-name'>Soccer</h2>
            <p className='TopRate-place'>Kozhikode</p>
            <div className='TopRate-star'>
            <Rating name="half-rating-read" defaultValue={2} precision={4} size="small" readOnly />
            </div>
            </div>

            <div>
            <img className='Card-image' src='https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb3RiYWxsfGVufDB8fDB8fHww'  />
            <h2 className='TopRate-name'>Soccer</h2>
            <p className='TopRate-place'>Kozhikode</p>
            <div className='TopRate-star'>
            <Rating name="half-rating-read" defaultValue={2} precision={4} size="small" readOnly />
            </div>
            </div>

            <div>
            <img className='Card-image' src='https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb3RiYWxsfGVufDB8fDB8fHww'  />
            <h2 className='TopRate-name'>Soccer</h2>
            <p className='TopRate-place'>Kozhikode</p>
            <div className='TopRate-star'>
            <Rating name="half-rating-read" defaultValue={2} precision={4} size="small" readOnly />
            </div>
            </div>

            <div>
            <img className='Card-image' src='https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb3RiYWxsfGVufDB8fDB8fHww'  />
            <h2 className='TopRate-name'>Soccer</h2>
            <p className='TopRate-place'>Kozhikode</p>
            <div className='TopRate-star'>
            <Rating name="half-rating-read" defaultValue={2} precision={4} size="small" readOnly />
            </div>
            </div>

            
          </div>
      </div>
   
  )
}

export default TopRated
