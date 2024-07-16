import React from 'react'
import { Stack,Box,Typography,TextField,Button,Link} from '@mui/material'
import { useForm} from "react-hook-form"
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Inscription() {

  const BASE_URL = import.meta.env.VITE_API_URL;
    const navigate=useNavigate();
      useEffect(()=>{
       if(localStorage.getItem("Utilisateur")){
          navigate("/");
         }
       })


    const { register, handleSubmit,formState:{errors} } = useForm();

    const onSubmit=(data)=>{
        if(data.mot_depasse !== data.confirm_mot_depasse){
              toast.error("les mots de passes ne sont pas identique")
        }else{
           // API de la base des donnes pour stocker les infos de l'utilisateur 
          axios.post(`${BASE_URL}/insert_utilisateur`,data)
          .then(({data})=>{
            localStorage.setItem("Utilisateur", JSON.stringify(data))
          
            toast.success("Inscription reussie")
            navigate("/")
          }).catch((err)=>{
            console.log(err)
            toast.err("Il a une erreur")
          })
            
        }
    }
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
          Inscription
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
            display:"grid",
            gap:2
        }}>
        <TextField id="filled-basic" label="Nom" variant="filled" fullWidth size='small'
        {...register("nom", { required:"Veillez saisir un nom"})}/>
        {errors.nom && <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

        <TextField id="filled-basic" label="post-nom" variant="filled" fullWidth size='small' 
        {...register("post_nom", { required:"Veillez saisir votre post nom"})}/>
         {errors.post_nom&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

        <TextField id="filled-basic" label="Genre" variant="filled" fullWidth size='small' 
          {...register("Genre", { required:"Veillez entrer votre genre"})}/>
           {errors.Genre&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}
          

        <TextField id="filled-basic" label="Statut" variant="filled" fullWidth  size='small' 
         {...register("Statut", { required:"Veillez entrer votre statut"})}/>
          {errors.Statut&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

        <TextField id="filled-basic" label="Email" variant="filled" type="email" fullWidth size='small' 
         {...register("Email", { required:"Veillez entrer votre Adresse mail"})}/>
          {errors.Email&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

        <TextField id="filled-basic" label="Mot de passe" variant="filled" type="password" fullWidth size='small' 
         {...register("mot_depasse", { required:"Veillez entrer votre mot de passe",minLength:{value:6,message:
            "Veillez entrer un mot de passe de plus de 6 characteres"
         }})}/>
          {errors.mot_depasse&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

        <TextField id="filled-basic" label="Confirmer le mot de passe" variant="filled" type="password" fullWidth size='small' 
         {...register("confirm_mot_depasse", { required:"Veillez entrer votre genre"})}/>
         {errors.confirm_mot_depasse&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}
        </Box>
        <Box sx={{
          
          display:"flex",
          justifyContent: "space-between"
        }}>
        <Button variant="contained" sx={{marginTop:2}} type="submit">Inscription</Button>
        
        <Link href="/connexion" sx={{position:"relative",top:"35px",textDecoration:"none"}}>Avez-vous un compte?</Link>
        </Box>
        
        </form>
        </Box>
      </Stack>
    </div>
  )
}

export default Inscription
