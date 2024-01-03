import React from 'react'
import './AddHubProfile.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from '../../axios';
import { useState } from 'react';


function AddHubProfile() {
  const [Disabled5s, setIsDisabled] = useState(false);
  const [Disabled7s,setDisable7s]= useState(false)
  const [Disabled11s,setDisabled] = useState(false);
  const [Disabledcricket,setDisabledcricket] = useState(false)
  
  const handle5s = () => {
    setIsDisabled(!Disabled5s);
  };
  const handle7s=()=>{
    setDisable7s(!Disabled7s)
  }

  const handle11s=()=>{
    setDisabled(!Disabled11s)
  }
  const handlecricket=()=>{
    setDisabledcricket(!Disabledcricket)
  }
 
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const submit =async()=>{
      await axios.post('/turf/AddTurfDetails/').then(()=>{

      })

      // price

      // data{
      //   price:pri
      // }
    }

  return (
    <div className='Profile'>
      <div className='AddProfile'>
            <h3 style={{marginLeft:'2rem' , paddingTop:'1rem'}}>ADD POFILE</h3>
        </div>
        <div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={-10}>
        <Grid item xs={6} md={4}>
        <input className='input-label' type='text' name='firstname' placeholder='firstname'/>
        </Grid>
        <Grid item xs={6} md={4}>
        <input  className='input-label' type='text' name='lastname' placeholder='lastname'/>
        </Grid>
        </Grid>
        </Box>
        <div  >
        <input className='input-label' style={{width:'50.5rem'}} type='text' name='address' placeholder='address'/>
        </div>
        </div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={-10}>
        <Grid item xs={6} md={4}>
        <input className='input-label' type='text' name='place' placeholder='place'/>
        </Grid>
        <Grid item xs={6} md={4}>
        <input  className='input-label' type='text' name='pincode' placeholder='pincode'/>
        </Grid>
        </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={-10}>
        <Grid item xs={6} md={4}>
        <input className='input-label' type='text' name='phone 1' placeholder='phone 1'/>
        </Grid>
        <Grid item xs={6} md={4}>
        <input  className='input-label' type='text' name='phone 2' placeholder='phone 2'/>
        </Grid>
        </Grid>
        </Box>
        <input className='input-label' style={{width:'50.5rem',height:'6rem'}} type='file' name='image' placeholder='image' />

        <div style={{marginLeft:'5rem',marginRight:'5rem',marginTop:'3rem'}}>
            <h2 style={{marginBlockEnd: '-0.5rem'}}>Court details</h2>
            <hr/>
            <h4>Select Available Court </h4>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
            <Grid item xs={6} md={4}>
            <FormGroup>
            <div><FormControlLabel 
                control={<Checkbox checked={Disabled5s} onChange={handle5s} />} label="5s Football"   />
                {Disabled5s && <input style={{height:'2rem'}} type="text" placeholder='Enter the Price'  />}</div>
            <div><FormControlLabel 
             control={<Checkbox checked={Disabled7s} onChange={handle7s} />} label="7s Football" />
             {Disabled7s && <input style={{height:'2rem'}} type='text' placeholder='Enter the Price' />}
            </div>
            <div><FormControlLabel  control={<Checkbox checked={Disabled11s} onChange={handle11s} />} label="11s Football" />
            {Disabled11s && <input style={{height:'2rem'}} type="text" placeholder='Enter the Price' />}</div>
            <div><FormControlLabel  control={<Checkbox checked={Disabledcricket} onChange={handlecricket} />} label="Cricket" />
            {Disabledcricket && <input style={{height:'2rem'}} type='text' placeholder='Enter the Price' />}</div>
            </FormGroup>
            </Grid>
            <Grid item xs={6} md={4}>
            <FormGroup>
            <FormControlLabel  control={<Checkbox />} label="Tennis" />
            <FormControlLabel  control={<Checkbox />} label="shuttle" />
            <FormControlLabel  control={<Checkbox />} label="Swimming Pool" />
            </FormGroup>
            </Grid>
            </Grid>
            </Box> 
        </div>
        <div style={{marginLeft:'5rem',marginRight:'5rem',marginTop:'3rem'}}>
        <h2 style={{marginBlockEnd: '-0.5rem'}}>Facilities</h2>
        <hr/>
        <h4>Select Available Facilites</h4>
        <FormControlLabel  control={<Checkbox />} label="Shower" />
        <FormControlLabel style={{paddingLeft:'4rem'}} control={<Checkbox />} label="first-aid" />
        <FormControlLabel style={{paddingLeft:'4rem'}} control={<Checkbox />} label="Locker" />
        <FormControlLabel style={{paddingLeft:'4rem'}} control={<Checkbox />} label="Cafe" />
        <FormControlLabel style={{paddingLeft:'4rem'}} control={<Checkbox />} label="parking" />
        </div>
        <button className='submit-turf'>SUBMIT</button>
         </div>
  )
}

export default AddHubProfile
