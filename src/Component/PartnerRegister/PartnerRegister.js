import React from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './PartnerRegister.css'

function PartnerRegister() {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    
  <div className='Pregisterbg'>
    <div className='partnerregister'>
        <h1 >Partner SignUp</h1>
    </div>
      <div className='Partner'>
    <TextField
      label="First Name"
      id="outlined-start-adornment"
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        startAdornment: <InputAdornment position="start"></InputAdornment>,
      }}
    />
    
     <TextField
      label="Last Name"
      id="outlined-start-adornment"
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        startAdornment: <InputAdornment position="start"></InputAdornment>,
      }}
    />
    <br></br>
    <TextField
      label="Email"
      id="outlined-start-adornment"
      sx={{ m: 1, width: '52ch' }}
      InputProps={{
        startAdornment: <InputAdornment position="start"></InputAdornment>,
      }}
    />
    <br></br>
    <TextField
      label="Phone Number"
      id="outlined-start-adornment"
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
    </div>
    <button type='submit' className='Partnerbutton'>SignUp</button>
    </div>
  )
}

export default PartnerRegister
