import React from 'react'
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './AdminLogin.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react'

function AdminLogin() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
    
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className='login'>
        <div className='login-box'>
            <h2 style={{marginLeft:"4rem"}} >AdminLogin</h2>
        <TextField
          label="Username"
          id="standard-start-adornment"
          sx={{ m: 1, width: '35ch' }}
          InputProps={{
          }}
          variant="standard"
        />
        <br/>
        <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        </div>
                <br/>
            <button type='submit' className='Loginbutton'><h3 style={{marginTop:"0.6rem"}}>LOGIN</h3></button>

            <div>
      <Button onClick={handleOpen} style={{marginLeft:'7rem',marginTop:'1rem',color:'black'}}>Login With Phone Number</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            OTP LOGIN
            <hr/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Enter the phone number to get the one-time password
            <input style={{height:'2.5rem',width:"20rem",border:'none',backgroundColor:'rgb(180,234,208)',borderRadius:'0.5rem',marginTop:'1rem',paddingLeft:'1rem'}}
             type='text' placeholder='phone Number' />
             <button className='get-otp'><h3 style={{marginTop:'0.4rem'}}>Get OTP</h3></button>
          </Typography>
        </Box>
      </Modal>
    </div>
       
        </div>

  )
}

export default AdminLogin
