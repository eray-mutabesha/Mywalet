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
import { isEmpty } from '../../Outils';




function LesEntres() {
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
  axios.get(`${BASE_URL}/get_entreData`)
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



  function deleteEntree(model){
    
    axios.delete(`${BASE_URL}/deleteEntree/${model.id}`)
    .then(({data})=>{
      console.log(data)

      setdatas(data.data)
      getToutLesEntres()
     
    }).catch((err)=>{
      console.log(err)
      toast.error("Il a une erreur")
    })
    
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

    <div>
      <h1>TOUT LES  DÉPÔTS </h1>
      <table>
        <thead>
          <tr>
          <th>Date de transaction</th>
            <th>Provenence</th>
            <th>Montant</th>
            <th>Action</th>
            <th>Numero du compte</th>
            <th>Action</th>
          </tr>
            
        </thead>
        <tbody >
    {datas.map((dat, index) => (
       
      <tr  key={index}>
        <td>{!isEmpty(dat)&&dat.date_transaction}</td>
        <td>{!isEmpty(dat)&&dat.provenance}</td>
        <td>{!isEmpty(dat)&&dat.montant}$</td>
        <td>{!isEmpty(dat)&&dat.action}</td>
        <td>{!isEmpty(dat)&&dat.designation}</td>
        <td><button onClick={()=> deleteEntree(dat)}>Supprimer</button></td>
      </tr>
     
    ))}
   </tbody>
</table>
  
    </div>
    </>
  )
}

export default LesEntres
