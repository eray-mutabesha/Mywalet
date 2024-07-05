import React from 'react'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Menucomponent from './component/Menucomponent'
import TableauResultat from './component/TableauResultat'
import MonCompt from './component/MonCompt'
import Paramettre from './component/Paramettre'
import Sorties from './component/Sorties'
import { useNavigate } from 'react-router-dom'
import { Stack,Box,Button,Link,TextField, Typography} from '@mui/material'
import { useForm} from "react-hook-form"
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useEffect } from 'react'
import Projet from './component/Projet'

function Dashboard() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit,reset,formState:{errors} } = useForm();
  const navigate= useNavigate();
  const handleAcceuil=()=>{
    navigate("/")
  }
  const handleEntre=()=>{
     navigate("/entre")
  } 

const onSubmit=(data)=>{
     // API de la base des donnes pour stocker les infos des entres 
    axios.post(`${BASE_URL}/insert_entres`,data)
    .then(({data})=>{
      console.log(data)
    
      toast.success("Depot reussie")
    
    }).catch((err)=>{
      console.log(err)
      toast.error("Il a une erreur")
    })
      
  
}

useEffect(()=>{
  if(!localStorage.getItem("Utilisateur")){
    navigate("/connexion");
   }
})



  return (
    <>
    <div className='div_one'>
    <nav><Box>
    <Button
        sx={{color:"white"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleAcceuil}
      >
        Acceuil
      </Button>
        </Box></nav>
    <nav><Box><TableauResultat /></Box></nav>
    <nav><Box>
    <Button
        sx={{color:"white"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleEntre}
      >
        LES ENTRÉES
      </Button>
    </Box></nav>
    <nav><Box>
    <Sorties />
    </Box></nav>
    <nav><Projet/></nav>
    <nav><MonCompt/></nav>
    <nav><Paramettre /></nav>
    </div>

    <div className='div_two'>
      <nav className='form_nav'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5">Dépôt d'argent</Typography>
        <br></br>
        <Box sx={{
            display:"grid",
            gap:2
        }}>

  
        <TextField id="filled-basic"  variant="outlined" type="date" fullWidth size='small' 
         {...register("data_de_tansaction", { required:"Veillez entrez la date de transaction"})}/>
          {errors.data_de_tansaction&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

        <TextField id="filled-basic" label="Provenence" variant="outlined" type="text" fullWidth size='small' 
         {...register("Provenence", { required:"Veillez entrez la provenence",minLength:{required:
            "Veillez entrez le provenence"
         }})}/>
          {errors.Provenence&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

          <TextField id="filled-basic" label="Montant" variant="outlined" type="number" fullWidth size='small' 
         {...register("Montant", { required:"Veillez entrez le montant",minLength:{required:
            "Veillez entrez le montant"
         }})}/>
          {errors.Montant&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

          <TextField id="filled-basic" label="Action" variant="outlined" type="text" fullWidth size='small' 
         {...register("Action", { required:"Veillez entrez l'action ",minLength:{required:
            "Veillez entrez l'action"
         }})}/>



  
        </Box>
        
        <Box sx={{
          
          display:"flex",
          justifyContent: "space-between"
        }}>
        <Button variant="contained" sx={{marginTop:2}} type="submit" >Faire un dépôt</Button>
        </Box>
        </form>

       
      </nav>
      <nav className='image_nav'>
        <img src="public\wallet_image-removebg-preview.png" alt="image" />
      </nav>
    </div>
   </>
  


  )
}

export default Dashboard
