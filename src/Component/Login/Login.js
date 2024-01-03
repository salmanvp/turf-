import React from 'react'
import './Login.css'
import { useState } from 'react'
import { unAuthInstance } from '../../axios'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



function Login() {
  const [email,setEmail]  = useState('')
  const [password,setPassword] = useState('')
  let passError = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
  let mailError = "Enter valid E-mail address"
  const data = {
    username:email,
    password:password,
  }
  const navigate = useNavigate ()
  const login = async()=>{
    await unAuthInstance.post('api/login/',data).then((res)=>{
      console.log(data)
      console.log(res.data);
      localStorage.setItem('token',JSON.stringify(res.data))
      navigate('/')

    }).catch((err)=>{
      console.log(err);
    })
  }

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
    <div className='login-user'>
        <div className='login-box'>
            <div style={{display:"flex"}}><h2>Login</h2><p style={{marginLeft:"10rem"}}>New User?<u style={{cursor:"pointer"}} onClick={()=>{navigate('/register')}}> Register</u></p></div>
        <TextField
          label="Username"
          onChange={(e)=>{setEmail(e.target.value)}}
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
            onChange={(e)=>{setPassword(e.target.value)}}
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
        <button type='submit' className='Loginbutton'><h3 style={{marginTop:"0.6rem"}} onClick={login}>LOGIN</h3></button>

        <div style={{display:"flex"}}><hr style={{marginLeft:'6rem',width:'8rem',marginTop:"2rem"}}/>
        
        <hr style={{width:'8rem',marginTop:"2rem",marginInlineStart:"-5rem"}}/></div>

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

export default Login
