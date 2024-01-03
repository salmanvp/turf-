import React, { useState } from 'react'
import './SelectSlotBooking.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';


function SelectSlotBooking() {
const navigate = useNavigate()


  const [date, setDate] = React.useState('');
  const [from, setFrom] = React.useState('');
  const [end, setTimeEnd] = React.useState('');


  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleTimeFrom = (event) => {
    setFrom(event.target.value);
  };
  const handleTimeEnd = (event) => {
    setTimeEnd(event.target.value);
  };

  return (
    <div>
      <div className='Soccer'>
        <h2>Soocer</h2>
        <hr></hr>
      </div>

      <div className='select-court'>
        <h4>Select the Court</h4>
        <ul>
        <FormControl>
      <RadioGroup>
      <FormControlLabel value="Football 5s" control={<Radio />} className='label-color' label="Football 5s" />
        <FormControlLabel value="Football 7s" control={<Radio />} className='label-color' label="Football 7s" />
        <FormControlLabel value="Tennis" control={<Radio />} className='label-color' label="Tennis" />
        <FormControlLabel value="Swimming Pool" control={<Radio />} className='label-color' label="swimming Pool" />
      </RadioGroup>
    </FormControl>
    <button className='pay-button' onClick={()=>{navigate('/payment')}}>PROCEED TO PAYMENT</button>
        </ul>
      </div>

      {/* DropDown */}
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
        <div className='Pick-date'>
        <h3>pick The Date</h3>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">DATE</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date}
          label="Age"
          onChange={handleDate}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        </Box>
        </div>
        </Grid>
        
        <Grid item xs={6} md={2}>
        <div className='Pick-time'>
            <h3>Pick The Time</h3>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">FROM</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={from}
          label="Age"
          onChange={handleTimeFrom}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        </Box>
        </div>
        </Grid>

        <Grid item xs={6} md={2}>
        <div className='time-to'>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">TO</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={end}
          label="Age"
          onChange={handleTimeEnd}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        </Box>
        </div>


        </Grid>
        </Grid>
        </Box>


       
     
    </div>
  )
}

export default SelectSlotBooking
