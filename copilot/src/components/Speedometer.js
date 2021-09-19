import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

function Speedometer() {
    const [value, setValue] = React.useState(50);
    React.useEffect(() => {
        setTimeout(() => {
            let max = 40;
            let min = 70;
            setValue(Math.floor(Math.random() * (max - min + 1)) + min);
        }, 4000)
    }, [value])
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardContent>
            <Typography variant='h6'><span>Average speed around you</span></Typography>
            <Typography variant='caption'><span>Calculates the average speed of vehicles around you.</span></Typography>
            <div style={{display: 'grid', placeItems: 'center', marginTop: '3rem'}}>
            <ReactSpeedometer
            maxValue={200}
            value={value}
            startColor={"#59d5f0"}
            endColor={"#80b8fb"}
            customSegmentStops={generateSegmentStops(10)}
            needleTransitionDuration={1000}
            needleTransition={"easeElastic"}
            currentValueText={"${value} km/h"}
            needleColor="#6308FF"
            segments={20}
            />
            </div>
        </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
    root: {
        width: '40%',
        height: '300px',
    }
  });

function generateSegmentStops(num) {
    const stops = [];

    for (let i=0; i<=num; i++) {
        stops.push(i*200/num);
    }
    return stops;
}

export default Speedometer;
