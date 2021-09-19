import React, { useRef } from 'react';
import { gsap } from "gsap";
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/system';


export default function LaneMarkings() {
    const classes = useStyles();
    const rectRef = useRef();
    const rectRef2 = useRef();
    const rectRef3 = useRef();
    const rectRef4 = useRef();
    const refArr = [rectRef, rectRef2, rectRef3, rectRef4]


    // wait until DOM has been rendered
    React.useEffect(() => {
        refArr.map((ref)=>{
            gsap.to(ref.current, {
                duration: 5,
                ease: "none",
                modifiers: {
                y: gsap.utils.unitize(x => parseFloat(x) % 250) //force x value to be between 0 and 500 using modulus
                },
                y: "+=1000",
                repeat: -1
            })
        })
        
    });

    return <>
            <Box>
                <Box className={classes.rectangle} ref={rectRef}/>
                <Box className={classes.rectangle} ref={rectRef2}/>
                <Box className={classes.rectangle} ref={rectRef3}/>
                <Box className={classes.rectangle} ref={rectRef4}/>
            </Box>
    </>
}

const useStyles = makeStyles({
    rectangle: {
        position: 'relative',
        width: '20px',
        height: '100px',
        backgroundColor: 'white',
        top: '-100px',
        marginBottom: '150px',
        marginLeft: '2rem',
        marginRight: '2rem'
    },
  });
