import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';



export default function Projet() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate=useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handletableau = () => {
    navigate("/tableaudesprojet")
  };
  const handleProject =()=>{
   navigate("/projet")
  }
  return (
    // parameter page
    <div>
      <Button
        sx={{color:"white"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        PROJETS
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleProject}>Enregistrer un nouveau projet</MenuItem>
        <MenuItem onClick={handletableau}>Tableu des projets</MenuItem>
      </Menu>
    </div>
  );
}