import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import SchoolIcon from '@mui/icons-material/School';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import AccessibleIcon from '@mui/icons-material/Accessible';

const icons = [{
                    name: 'Pregnant',
                    color: 'secondary',
                    icon: <PregnantWomanIcon/>
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

export default function SetIconsDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleClose = () => {
      onClose(null);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle><h1>Set Icons</h1></DialogTitle>
        {icons.map((ico) => (
            <Button 
            key={ico.name} 
            startIcon={ico.icon} 
            onClick={() => handleListItemClick(ico.name)}
            style={{margin: '3rem 6rem 3rem 6rem', padding: '1rem', borderRadius: '33px'}} 
            color={ico.color} 
            variant={selectedValue.includes(ico.name) ? 'contained' : 'outlined'}>
                {ico.name} Icon
            </Button>
        ))}
    </Dialog>
  );
}