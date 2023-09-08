import React from 'react'
import Logo from '../Assets/DirumsLogo.png'
import { Grid, Typography } from '@mui/material';

import Divider from '@mui/material/Divider';
import './Styles.css'

function Logoheader() {
    
   
  return (
    <div>
        <Grid container spacing={2}>
      <Grid >
      
      <img
        src={Logo} // Replace with the actual path to your image
        alt="Image Description" // Replace with a brief description of the image
        height="130" // Set the height of the image
        width="200" // Set the width of the image
      />
      
      </Grid>
      <Grid>
      <Divider orientation="vertical" variant="middle" />
      </Grid>
      <Grid >
      
        <div>
        <Typography variant="h3" >
        Website Development Tracker
        </Typography>
        </div>
      </Grid>
    </Grid>
      {/* <img
        src={Logo} // Replace with the actual path to your image
        alt="Image Description" // Replace with a brief description of the image
        height="130" // Set the height of the image
        width="200" // Set the width of the image
      />
      <p>Website Development Tracker</p> */}
      
    </div>
  )
}

export default Logoheader
