import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Sorties() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate=useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 const handleretrait=()=>{
  navigate("/sorties")
 }
 const handleTableau = () => {
  navigate("/tableaudessorties")
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
        Sorties
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
        <MenuItem onClick={handleretrait}>Faire un retrait</MenuItem>
        <MenuItem onClick={handleTableau}>Tableau des sorties</MenuItem>
       
      </Menu>
    </div>
  );
}