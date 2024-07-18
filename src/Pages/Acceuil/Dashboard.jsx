import React, { useState } from 'react'
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

function Dashboard({singleEntre,onUpdate }) {


  const BASE_URL = import.meta.env.VITE_API_URL;
   const { register, handleSubmit,formState:{errors} } = useForm();
  // const { onChange} = register('select');

  const [tresorerieOptions, settresorerieOptions] = useState([]);
  const navigate= useNavigate();
  const handleAcceuil=()=>{
    navigate("/")
  }
  const handleEntre=()=>{
     navigate("/entre")
  } 

// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
  const [formData, setFormData] = useState({
    data_de_tansaction: "",
    Provenence: "",
    Montant: "",
    Action: "",
    select: ""
  });


  useEffect(() => {
    if (singleEntre) {
      setFormData({
        data_de_tansaction: singleEntre.date_transaction || "",
        Provenence: singleEntre.provenance || "",
        Montant: singleEntre.montant || "",
        Action: singleEntre.action || "",
        select: singleEntre.designation || ""
      });
    }
  }, [singleEntre]);


const onSubmit = (data) => {
  if (singleEntre && singleEntre.id) {
    // API pour mettre à jour les données
    axios.put(`${BASE_URL}/updateEntree/${singleEntre.id}`, data)
      .then(({ data }) => {
        if (data.status == 500) {
          toast.error("Il y a une erreur");
        } else {
          toast.success("Mise à jour réussie");
          if (onUpdate) {
            onUpdate();
          }
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  } else {
    // API pour insérer les données
    axios.post(`${BASE_URL}/insert_entres`, data)
      .then(({ data }) => {
        if (data.status == 500) {
          toast.error("Il y a une erreur");
        } else {
          toast.success("Dépôt réussi");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  }
};

// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
const tresorerieOptionsFn =() =>{
  axios.get(`${BASE_URL}/getTresorerieOptions`)
    .then(({data})=>{
      console.log(data)
    
      settresorerieOptions(data.data)
    }).catch((err)=>{
      console.log(err)
      toast.error("Il a une erreur")
    })
}


//protection rootes
useEffect(()=>{
  tresorerieOptionsFn();
  if (singleEntre) {
    console.log(singleEntre)
  }
  //  if(!localStorage.getItem("Utilisateur")){
  //   navigate("/connexion");
  //  }
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
        LES ENTRÉES
      </Button>
    </Box></nav>
    <nav><Box>
    <Sorties />
    </Box></nav>
    <nav><Projet/></nav>
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

  
<TextField
      id="filled-basic"
      variant="outlined"
      type="date"
      fullWidth
      size='small'
      {...register("data_de_tansaction", { required: "Veuillez entrer la date de transaction" })}
      value={formData.data_de_tansaction}
      onChange={(e) => setFormData({ ...formData, data_de_tansaction: e.target.value })}
    />
    {errors.data_de_tansaction && <span sx={{ color: "red" }}>Ce champ est obligatoire</span>}

 
    <TextField
      id="filled-basic"
      label="Provenance"
      variant="outlined"
      type="text"
      fullWidth
      size='small'
      {...register("Provenence", { required: "Veuillez entrer la provenance" })}
      value={formData.Provenence}
      onChange={(e) => setFormData({ ...formData, Provenence: e.target.value })}
    />
    {errors.Provenence && <span sx={{ color: "red" }}>Ce champ est obligatoire</span>}


        
    <TextField
      id="filled-basic"
      label="Montant"
      variant="outlined"
      type="number"
      fullWidth
      size='small'
      {...register("Montant", { required: "Veuillez entrer le montant" })}
      value={formData.Montant}
      onChange={(e) => setFormData({ ...formData, Montant: e.target.value })}
    />
    {errors.Montant && <span sx={{ color: "red" }}>Ce champ est obligatoire</span>}



    <TextField
      id="filled-basic"
      label="Action"
      variant="outlined"
      type="text"
      fullWidth
      size='small'
      {...register("Action", { required: "Veuillez entrer l'action" })}
      value={formData.Action}
      onChange={(e) => setFormData({ ...formData, Action: e.target.value })}
    />

         
          <select
            className='select'
            {...register("select", { required: "Veuillez entrer l'action" })}
            value={formData.select}
            onChange={(e) => setFormData({ ...formData, select: e.target.value })}
          >
           <option value="">Sélectionner trésorerie</option>
           {tresorerieOptions.map((item, index) => (
           <option key={index} value={item.id}>{item.designation}</option>
           ))}
         </select>
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
