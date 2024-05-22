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
import './components.css/Utilisateur.css'


function UtilisateurPage() {
    const navigate=useNavigate()
    const handleAcceuil=()=>{
        navigate("/")
      }
    const handleEntre=()=>{
        navigate("/entre")
     } 
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

   {/* section des indentite */}
    <section>
      <div>
         <img src='public\profilphoto.png' alt='photo_de_profile'/>
      </div>
      <div className='informations_user'>
          <div className='administrateur'>
            <h2>Administrateur</h2>
            <p><strong>Email:</strong><span>eraymutabesha@gmail.com</span></p>
          </div>
          <div className='identities'>
            <nav><p><strong>Nom:</strong><span>Eray</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Post-Nom:</strong><span>Mutabesha</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Genre:</strong><span>masculin</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Statut:</strong><span>celibataire</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Action:</strong><span>une action</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
          </div>
      </div>
    </section>
    </>
    
  )
}

export default UtilisateurPage
