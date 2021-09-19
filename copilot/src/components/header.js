import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";
import SetIconsDialog from "../pages/SetIcons";
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import SchoolIcon from '@mui/icons-material/School';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import AccessibleIcon from '@mui/icons-material/Accessible';

const icons = [{
    name: 'Pregnant',
    color: 'secondary',
    icon: <PregnantWomanIcon />
}, 
{
    name: 'Learner',
    color: 'primary',
    icon: <SchoolIcon/>

}, 
{
    name:'Disabled',
    color: 'success',
    icon: <AccessibleIcon/>

}, 
{
    name:'Baby on Board',
    color: 'warning',
    icon: <ChildFriendlyIcon/>

}];

function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [trigger, setTrigger] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    if (value !== null) {
        setSelectedValue((sel) => {
            if (!sel.includes(value)) sel.push(value)
            else {
                const index = sel.indexOf(value);
                if (index > -1) {
                    sel.splice(index, 1);
                }
            }
            return sel
        })
    } else {setOpen(false)}
    setTrigger(!trigger)
  };

  return (
      <>
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
            <Button 
            color='primary' 
            variant='contained' 
            startIcon={<SettingsIcon/>} 
            style={{borderRadius: '55px', marginLeft: '5rem'}}
            onClick={handleClickOpen}>Set Icons</Button>
        </Grid>
        <Grid item xs={4}/>
        <Grid item>
            <span style={{display: 'flex', alignItems: 'center'}}>
                <Typography>Active Icons: </Typography>
                {icons.map((ico)=> {
                    if (selectedValue.includes(ico.name)) return ico.icon
                })}
            </span>
        </Grid>
      </Grid>
    </Card>
    <SetIconsDialog triggerChange={trigger} onClose={handleClose} open={open} selectedValue={selectedValue}/>
    </>
  );
}

const useStyles = makeStyles({
  root: {
      padding: '0.5rem 3rem',
      width: '100%',
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
