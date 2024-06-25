import React from 'react'
import { Stack,Box,Typography,TextField,Button,Link} from '@mui/material'
import { useForm} from "react-hook-form"
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 import { useEffect } from 'react';


function Connexion() {   
    const navigate=useNavigate();
      useEffect(()=>{
       if(localStorage.getItem("Utilisateur")){
          navigate("/");
         }
       })
    const { register, handleSubmit,formState:{errors} } = useForm();
    const onSubmit=(data)=>{
     
     // verification de l'existence de l'utilisateure apartire de son adress mail  et son mot de passe
     axios.get(`http://localhost:3000/insert_utilisateur?Email=${data.Email}&mot_depasse=${data.mot_depasse}`).then((res)=>{
      if(res.data.length > 0){
         //inserssion des donnes dans le local storage
        localStorage.setItem("Utilisateur", JSON.stringify(res.data[0]))
        toast.success("Connexion reussi");
        navigate("/");
      }
      else{
        toast.error("Les identifient sont incorrecte")
      }
    })}

  return (
    <div>
      <Stack 
      alignItems={"center"} justifyContent={"center"}
      width={"100%"} height={"100vh"}>
        <Box  width={400} 
        sx={{backgroundColor:"white",
            padding:3
        }}>
        <Typography variant="h5">
          Connexion
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
            display:"grid",
            gap:2
        }}>
  
        <TextField id="filled-basic" label="Email" variant="filled" type="email" fullWidth size='small' 
         {...register("Email", { required:"Veillez entrer votre Adresse mail"})}/>
          {errors.Email&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

        <TextField id="filled-basic" label="Mot de passe" variant="filled" type="password" fullWidth size='small' 
         {...register("mot_depasse", { required:"Veillez entrer votre mot de passe",minLength:{value:6,message:
            "Veillez entrer un mot de passe de plus de 6 characteres"
         }})}/>
          {errors.mot_depasse&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

  
        </Box>
        <Box sx={{
          
          display:"flex",
          justifyContent: "space-between"
        }}>
        <Button variant="contained" sx={{marginTop:2}} type="submit">Connexion</Button>
        
        <Link href="/inscription" sx={{position:"relative",top:"35px",textDecoration:"none"}}>Vous n'avez pas de compte?</Link>
        </Box>
        </form>
        </Box>
      </Stack>
    </div>
  )
}


export default Connexion
