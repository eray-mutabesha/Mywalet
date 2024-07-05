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
function LesSorties() {
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
        axios.post(`${BASE_URL}/insert_sorties`,data).then((res)=>{
          console.log(data)
          toast.success("Retrait d'argent effectuer")
          
          
        }).catch((err)=>{
          console.log(err)
          toast.err("Il a une erreur")
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
   <Button
       sx={{color:"white"}}
       id="basic-button"
       aria-controls={open ? 'basic-menu' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}
    
     >
       Projets
     </Button>
   </Box></nav>
   <nav><MonCompt/></nav>
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
          Faire un retrait
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button variant="contained" sx={{marginTop:2}} type="submit">Faire un retrait</Button>
        </Box>
        </form>
        </Box>
      </Stack>
        </div>
   </>
  )
}

export default LesSorties
