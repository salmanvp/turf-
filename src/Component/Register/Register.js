import React from 'react'
import './Register.css'
import {useState} from 'react'
import {unAuthInstance} from '../../axios'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';



function Register() {
  const navigate = useNavigate ()
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [lastname,setLatname] = useState('')
    const [password,setPassword] = useState('')
    const [conformpassword,setConformpassword] = useState('')
    const data = {
      username:name,
      lastname:lastname,
      phone:phone,
      email:email,
      password:password,
      conformpassword:conformpassword,
    }
    const passError = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
    let nameError = "Name must be atleast 3 characters long"
    let phoneError = "Enter valid phone number"
    let mailError = "Enter valid E-mail address"

    const  SignUp= async()=>{
      await unAuthInstance.post('api/register/',data).then((res)=>{
        console.log(res.data);
        navigate('/login')
      })
    }

  return (
    <div className='register-card'>
    <div className='register'>
        <h1 >SignUp</h1>
    </div>
      <div className='Partner'>
          <TextField
            label="User Name"
            id="outlined-start-adornment"
            onChange={(e)=>{setName(e.target.value)}}
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
          
          <TextField
            label="Last Name"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            onChange={(e)=>{setLatname(e.target.value)}}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
          <br></br>
          <TextField
            label="Email"
            id="outlined-start-adornment"
            type='email'
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
            onChange={(e)=>{setEmail(e.target.value)}}
            sx={{ m: 1, width: '52ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
          <br></br>
          <TextField
            label="Phone Number"
            id="outlined-start-adornment"
            onChange={(e)=>{setPhone(e.target.value)}}
            sx={{ m: 1, width: '52ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
          <br></br>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              onChange={(e)=>{setPassword(e.target.value)}}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              onChange={(e)=>{setConformpassword(e.target.value)}}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="conformpassword"
            />
          </FormControl>
          </div>
          <button type='submit' className='button1' onClick={SignUp}>SignUp</button>
          
          </div>
  )
}

export default Register
