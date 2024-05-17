import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Menucomponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{color:"white"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Tableau de bord</MenuItem>
        <MenuItem onClick={handleClose}>Les enteres</MenuItem>
        <MenuItem onClick={handleClose}>les sorties</MenuItem>
        <MenuItem onClick={handleClose}>Compte</MenuItem>
        <MenuItem onClick={handleClose}>Projets</MenuItem>
        <MenuItem onClick={handleClose}>Raport Generale</MenuItem>
      </Menu>
    </div>
  );
}