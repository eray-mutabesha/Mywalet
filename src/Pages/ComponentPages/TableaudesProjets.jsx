import React from 'react'
import './components.css/LesEntres.css'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Stack,Box,Button,Link,TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import TableauResultat from '../Acceuil/component/TableauResultat'
import MonCompt from '../Acceuil/component/MonCompt'
import Paramettre from '../Acceuil/component/Paramettre'
import Sorties from '../Acceuil/component/Sorties'
import Menucomponent from '../Acceuil/component/Menucomponent';
import { Margin } from '@mui/icons-material';
import Projet from '../Acceuil/component/Projet';



function TableaudesProjets() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [datas,setdatas]=useState([])
  const navigate = useNavigate()
  const handleAcceuil=()=>{
    navigate("/")
  }
  const handleEntre=()=>{
    navigate("/entre")
 } 
 const getToutLesEntres =() =>{
  axios.get(`${BASE_URL}/getproject`)
    .then(({data})=>{
      console.log(data)
    
      setdatas(data.data)
    }).catch((err)=>{
      console.log(err)
      toast.error("Il a une erreur")
    })
}

useEffect(()=>{
  getToutLesEntres();
 
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

    <div>
      <h1>TOUT LES  DÉPÔTS </h1>
      <table>
        <thead>
          <tr>
          <th>Designation</th>
            <th>Date debut</th>
            <th>Date fin</th>
            <th>Montant</th>
            <th>Action</th>
          </tr>
            
        </thead>
        <tbody >
    {datas.map((dat, index) => (
       
      <tr  key={index}>
        <td>{dat.designation}</td>
        <td>{dat.date_debut}</td>
        <td>{dat.date_fin}</td>
        <td>{dat.montant}$</td>
        <td className='action'>
          <img src ='public\editPhoto-removebg-preview.png' className='corbeil_image' />
          <img src ='public\up_2.png' className='corbeil_image' />
          <img src ='/public/delete_corbrille.png' className='corbeil_image'/>
        </td>
      </tr>
     
    ))}
   </tbody>
</table>
  
    </div>
    </>
  )
}



export default TableaudesProjets
