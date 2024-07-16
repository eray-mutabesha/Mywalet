import React from 'react'
import { Stack,Box,Typography,TextField,Button,Link} from '@mui/material'
import './components.css/Deconnexion.css'
import { useNavigate } from 'react-router-dom'

function Deconnexion() {
    // deconnexion page and importing use navigate
    const navigate=useNavigate();
    const handleAcceuil=()=>{
     navigate("/")
    }
    const handleout=()=>{
        localStorage.clear();
        navigate("/connexion")
    }
  return (
    <Box sx={{
        marginTop:"20vh",
        width:"30%",
        marginLeft:"auto",
        marginRight:"auto",
        background:"white",
        padding:"10px"
    }}>
    <Box  sx={{
        display:"grid",
        gap:"20px",
        textAlign:"center",
        margin:"10px "
        
       
    }}> 
   <img src='public\logoutimage-removebg-preview.png' alt='logoutimage' className='logoutimage'/>
        <Typography sx={{color:"red"}} variant="h5">Oh !! voulez-vous vraiment vous deconnectez??</Typography>
        <Button sx={{border:"1px solid blue"}}  onClick={handleAcceuil}>
            Retour a l'Acceuil
        </Button>
        <Button variant="contained"  onClick={handleout}>
            Se deconnecter
        </Button>
    </Box>
    </Box>
  )
}

export default Deconnexion
