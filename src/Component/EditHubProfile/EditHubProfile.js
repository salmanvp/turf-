import React from 'react'
import './EditHubProfile.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function EditHubProfile() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='EditHubProfile'>
      <div className='EditProfile'>
            <h3 style={{marginLeft:'2rem' , paddingTop:'1rem'}}>EDIT POFILE</h3>
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
        <input className='input-label' style={{width:'53.5rem'}} type='text' name='address' placeholder='address'/>
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
        <input className='input-label' style={{width:'53.5rem',height:'6rem'}} type='file' name='image' placeholder='image' />

        <div style={{marginLeft:'5rem',marginRight:'5rem',marginTop:'3rem'}}>
            <h2 style={{marginBlockEnd: '-0.5rem'}}>Court details</h2>
            <hr/>
            <h4>Select Available Court </h4>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={-10}>
            <Grid item xs={6} md={4}>
            <FormGroup>
            <FormControlLabel  control={<Checkbox />} label="5s Football" />
            <FormControlLabel  control={<Checkbox />} label="7s Football" />
            <FormControlLabel  control={<Checkbox />} label="11s Football" />
            <FormControlLabel  control={<Checkbox />} label="Cricket" />
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

export default EditHubProfile
