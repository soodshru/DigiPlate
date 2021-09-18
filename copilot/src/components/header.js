import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";

function Header() {
  const classes = useStyles();

  return (
    <Card raised className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={2}>
          <Typography variant="h4" component={Link} to='/' style={{textDecoration: 'none'}}>
            <span className={classes.logo}>Copilot</span>
          </Typography>
        </Grid>
        <Grid item>
            <Button 
            color='error' 
            variant='contained' 
            startIcon={<CancelIcon/>} 
            style={{borderRadius: '55px'}}
            component={Link}
            to='/report'>Report</Button>
        </Grid>
      </Grid>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
      padding: '0.5rem 3rem'
  },
  logo: {
    "font-family": "cursive",
    fontWeight: "bolder",
  },
  container: {
      display: 'flex',
      alignItems: 'center',
  }
});

export default Header;
