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
import { useNavigate } from 'react-router-dom';
import './components.css/Utilisateur.css'
import { useEffect,useState } from 'react';
import { isEmpty } from '../../Outils';
import Projet from '../Acceuil/component/Projet';


function UtilisateurPage() {
  const BASE_URL = import.meta.env.VITE_API_URL;

    const navigate=useNavigate()
    const [datas,setdatas]=useState([])
    const handleAcceuil=()=>{
        navigate("/")
      }
    const handleEntre=()=>{
        navigate("/entre")
     } 


     useEffect(()=>{
      const getData = async () => {
        
        try {
          // Fetch posts data
          const data = await fetch(`${BASE_URL}/getUtilisateurData`,{
            method:'GET',

          });

         const res= await data.json();
         if(res.data){
          setdatas(res.data);
         }
          
        } 
        catch(error){
          console.log("ERROR",error)
        }
      };
      
      getData();
    },[])
  
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

   {/* section des indentite */}
    <section>
      <div>
         <img src='public\profilphoto.png' alt='photo_de_profile'/>
      </div>
      <div className='informations_user'>
          <div className='administrateur'>
            <h2>Administrateur</h2>
            <p><strong>Email:</strong><span>{!isEmpty(datas)&&datas[0].email}</span></p>
          </div>
          <div className='identities'>
            <nav><p><strong>Nom:</strong><span>{!isEmpty(datas)&&datas[0].name}</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Genre:</strong><span>{!isEmpty(datas)&&datas[0].gender}</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Statut:</strong><span>{!isEmpty(datas)&&datas[0].statut}</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Action:</strong><span>une action</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Mot de passe:</strong><span>{!isEmpty(datas)&&datas[0].password }</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
          </div>
      </div>
    </section>
    </>
    
  )
}

export default UtilisateurPage
