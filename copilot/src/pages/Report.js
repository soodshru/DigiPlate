import React, { useRef } from 'react';
import { gsap } from "gsap";
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Header from '../components/header';
import Car from '../static/car.svg';
import Car2 from '../static/car2.svg';
import Car4 from '../static/car4.svg';
import MyCar from '../static/mycar.svg';
import LaneMarkings from '../components/LaneMarkings';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';


export default function Report() {
    const car1 = useRef()
    const car2 = useRef()
    const car3 = useRef()
    const [open, setOpen] = React.useState(false)
    const [licensePlate, setLicensePlate] = React.useState('')

    React.useEffect(() => {
        gsap.to(car1.current, {
            duration: 14,
            ease: "none",
            y: "-=1000",
        })
        gsap.to(car2.current, {
            duration: 10,
            ease: "none",
            y: "-1200",
            repeat: -1
        })
        gsap.to(car3.current, {
            duration: 10,
            ease: "none",
            y: "+=1000",
            repeat: -1
        })         
    });

    const handleClickOpen = (opt) => {
        setLicensePlate(opt === 1 ? 'HTV 2021' : opt === 2 ? 'IJKL 123' : 'JKLI 548')
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const dialog = () => (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Are you sure that you want to report the following car?
          <span style={{textAlign: 'center'}}><Typography variant='h6'>{licensePlate}</Typography></span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    )

    return <div style={{overflow: 'hidden'}}>
        <Header/>
        <div style={{display: 'flex', backgroundColor: '#222222', overflow: 'hidden',zIndex: '0', width: '100%', height: '100vh', justifyContent: 'center', position: 'absolute'}}>
            <Box ref={car1} onClick={() => handleClickOpen(1)}>
                <img style={{width: '100px', height: 'auto', marginTop: '30rem'}} src={Car} alt='car'/>
            </Box>
            <LaneMarkings/>
            <Box ref={car2} onClick={() => handleClickOpen(2)}>
                <img style={{width: '100px', height: 'auto', marginTop: '60rem'}} src={Car2} alt='car'/>
            </Box>
            <LaneMarkings/>
            <Box>
                <img style={{width: '100px', height: 'auto', marginTop: '20rem'}} src={MyCar} alt='car'/>
            </Box>
            <LaneMarkings/>
            <Box ref={car3} onClick={() => handleClickOpen(3)}>
                <img style={{width: '100px', height: 'auto', marginBottom: '140rem'}} src={Car4} alt='car'/>
            </Box>
            <LaneMarkings/>
            {dialog()}
        </div>
    </div>
}
