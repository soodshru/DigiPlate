import React, { useRef } from 'react';
import { gsap } from "gsap";
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/system';
import Header from '../components/header';
import Car from '../static/car.svg';
import Car2 from '../static/car2.svg';
import Car3 from '../static/car3.svg';
import Car4 from '../static/car4.svg';
import Car5 from '../static/car5.svg';


export default function Report() {
    const classes = useStyles();
    const rectRef = React.useRef();

    // wait until DOM has been rendered
    React.useEffect(() => {
        gsap.to(rectRef.current, {
            duration: 5,
            ease: "none",
            y: "+=500", //move each box 500px to right
            modifiers: {
              y: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
            },
            repeat: -1
          });
    });

    return <>
        <Header/>
        <div style={{display: 'flex'}}>
            <Box>
                <img style={{width: '100px', height: 'auto'}} src={Car} alt='car'/>
            </Box>
            <Box>
                <Box className={classes.rectangle} ref={rectRef}/>
                <Box className={classes.rectangle}/>
                <Box className={classes.rectangle}/>
                <Box className={classes.rectangle}/>
            </Box>
            <Box>
                <img style={{width: '100px', height: 'auto'}} src={Car2} alt='car'/>
            </Box>
            <Box>
                <img style={{width: '100px', height: 'auto'}} src={Car3} alt='car'/>
            </Box>
            <Box>
                <img style={{width: '100px', height: 'auto'}} src={Car4} alt='car'/>
            </Box>
            <Box>
                <img style={{width: '100px', height: 'auto'}} src={Car5} alt='car'/>
            </Box>
        </div>
    </>
}

const useStyles = makeStyles({
    rectangle: {
        width: '20px',
        height: '100px',
        backgroundColor: 'black',
        marginBottom: '150px',
        marginLeft: '2rem',
        marginRight: '2rem'
    },
  });
