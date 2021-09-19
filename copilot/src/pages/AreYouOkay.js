import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from "react-router-dom";

function AreYouOkay() {
    const [timer, setTimer] = React.useState(10)

    React.useEffect(()=> {
        if (timer > 0) {
            setTimeout(() => {
                setTimer(timer - 1)
            }, 1000)
        }
        else alert("An ambulance should be on the way here soon. Hang on tight!")
    }, [timer])

    const alertUser = () => {
        alert("An ambulance should be on the way here soon. Hang on tight!")
    }

  return (
    <Box style={{display: 'grid', placeItems: 'center'}}>
      <ErrorIcon style={{fontSize: '20rem'}} color='error'/>
      <Typography variant='h2'>Are you okay?</Typography>
      <Typography variant='subtitle1' style={{marginTop: '3rem'}}>If everything is alright and there is not much damage to you or your car, you can go ahead and press yes.</Typography>
      <span style={{marginTop: '5rem'}}><Button style={{marginRight: '5rem'}} variant='contained' component={Link} to='/'>Yes, {timer}</Button>
      <Button onClick={alertUser} variant='contained' color='error' startIcon={<LocalHospitalIcon/>}>No, I need help</Button></span>
    </Box>
  );
}

export default AreYouOkay;
