import React from 'react';
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const headers = ['Best Driver Score', 'Rank in Country', 'Rank in City', 'Karma Points']
const points = ['109', '10,412', '1,005', '89']

function Achievement() {
    const classes = useStyles();

    const card = (idx) => (
    <Card 
    className={`${classes.card} ` + (idx === 0 ? `${classes.greenGradient}` : idx === 1 ? `${classes.purpleGradient}`: idx === 2 ? `${classes.pinkGradient}` : `${classes.orangeGradient}`)}>
        <CardContent>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1.5rem'}}>
            <Typography variant='h5'>{headers[idx]}</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
            <Typography variant='h4'>{points[idx]}</Typography>
            {idx === 0 ? <StarBorderIcon fontSize='large' style={{marginLeft: '1rem'}}/> :
            idx === 1 ? <PublicIcon fontSize='large' style={{marginLeft: '1rem'}}/> :
            idx === 2 ? <LocationCityIcon fontSize='large' style={{marginLeft: '1rem'}}/> :
            <DoneOutlineIcon fontSize='large' style={{marginLeft: '1rem'}}/>}
            </Box>
        </CardContent>
    </Card>
    )

  return (<Box className={classes.root}><Box display='flex'>
        {card(0)}
        {card(1)}
        </Box>
        <Box display='flex'>
        {card(2)}
        {card(3)}
        </Box></Box>
  );
}

const useStyles = makeStyles({
    root: {
        width: '45%',
    },
    card: {
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        height: '150px',
        marginBottom: '3rem',
        '&+&': {
            marginLeft: '3rem'
        }
    },
    greenGradient: {
        backgroundImage: 'linear-gradient(to bottom right, #94c840, #18ac91)' 
    },
    purpleGradient: {
        backgroundImage: 'linear-gradient(to bottom right, #5c22d3, #2b6af7)'
    },
    orangeGradient: {
        backgroundImage: 'linear-gradient(to bottom right, #fb631e, #f7aa32)'
    },
    pinkGradient: {
        backgroundImage: 'linear-gradient(to bottom right, #f11b61, #fc5113)'
    }
  });

function generateSegmentStops(num) {
    const stops = [];

    for (let i=0; i<=num; i++) {
        stops.push(i*200/num);
    }
    return stops;
}

export default Achievement;
