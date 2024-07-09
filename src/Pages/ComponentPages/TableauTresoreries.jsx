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

function TableauTresoreries(){
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
  axios.get(`${BASE_URL}/getTresorerieOptions`)
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
      <h1>LES COMPTES DISPONIBLE (Tresoreries)</h1>
      <table>
        <thead>
          <tr>
          <th>Date de creation</th>
            <th>Designation</th>
            <th>Montant</th>
            <th>Type de compte</th>
            
          </tr>
            
        </thead>
        <tbody >
    {datas.map((dat, index) => (
       
      <tr  key={index}>
        <td>{dat.ceated_at}</td>
        <td>{dat.designation}</td>
        <td>{dat.montant}$</td>
        <td>{dat.type_compte}</td>
      </tr>
     
    ))}
   </tbody>
</table>
  
    </div>
    </>
  )
}

export default TableauTresoreries
