import React from 'react';
import './components.css/LesEntres.css';
import { Stack,Box,Button,Link,TextField,Typography} from '@mui/material';
import { useForm} from "react-hook-form";
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import TableauResultat from '../Acceuil/component/TableauResultat'
import MonCompt from '../Acceuil/component/MonCompt'
import Paramettre from '../Acceuil/component/Paramettre'
import Sorties from '../Acceuil/component/Sorties'
import Menucomponent from '../Acceuil/component/Menucomponent';
import { useNavigate } from 'react-router-dom';
import Projet from '../Acceuil/component/Projet';



function Projets() {
  const BASE_URL = import.meta.env.VITE_API_URL;
    const navigate=useNavigate()
    const handleAcceuil=()=>{
        navigate("/")
      }
    const handleEntre=()=>{
        navigate("/entre")
     } 
    const { register, handleSubmit,formState:{errors} } = useForm();
    const onSubmit=(data)=>{
      //  pour enregistrer les sorties 
      axios.post(`${BASE_URL}/insert_projet`,data)
     .then(({data})=>{
    if (data.status == 500) {
      toast.error("Il a une erreur")
    } else {
      console.log(data)
  
      toast.success("sotie reussie")
    }
    
  }).catch((err)=>{
    console.log(err)
    toast.error("Il a une erreur")
  })
     }



  return (
   <><div className='div_one'>
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
       Les entres
     </Button>
   </Box></nav>
   <nav><Box>
   <Sorties />
   </Box></nav>
   <nav><Box>
   <Projet/>
   </Box></nav>
   
   <nav><Paramettre /></nav>
   </div>
   
   <div >
   <Stack 
      alignItems={"center"} justifyContent={"center"}
      width={"100%"} height={"90vh"}>
        <Box  width={400} 
        sx={{backgroundColor:"white",
            padding:3
        }}>
        <Typography variant="h5">
          Debuter un projet
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
            display:"grid",
            gap:2
        }}>
  
        <TextField id="filled-basic" label="Designation" variant="outlined" type="text" fullWidth size='small' 
         {...register("designation", { required:"Veillez entrez une designation"})}/>
          {errors.designation&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

       

          <TextField id="date" label="date debut" variant="outlined" type="date" fullWidth size='small' 
         {...register("date_debut", { required:"Veillez entrez la date"})}/>
          {errors.date_debut&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}



          <TextField id="date" label="date fin" variant="outlined" type="date" fullWidth size='small' 
         {...register("date_fin", { required:"Veillez entrez la date"})}/>
          {errors.date_fin&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}



          <TextField id="montant" label="Montant" variant="outlined" type="number" fullWidth size='small' 
         {...register("montant", { required:"Veillez entrez la montant"})}/>
          {errors.montant&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

          

  
        </Box>
        <Box sx={{
          
          display:"flex",
          justifyContent: "space-between"
        }}>
        <Button variant="contained" sx={{marginTop:2}} type="submit">Enregistrer</Button>
        </Box>
        </form>
        </Box>
      </Stack>
        </div>
   </>
  )
}

export default Projets
