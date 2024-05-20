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

function LesEntres() {
  const [datas,setdatas]=useState([])
  const handleEntre=()=>{
    navigate("/entre")
 } 


useEffect(()=>{
  const getData = async () => {
    
    try {
      // Fetch posts data
      const data = await axios.get('http://localhost:3000/LesEntres');
      setdatas(data.data);
  
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  getData();
},[])
let sommeDesEntres=0;

  
    
  return (
    <>
    <div className='div_one'>
    <nav><Box><Menucomponent /></Box></nav>
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
      <h1>TABLEAU DES DEPOTS</h1>
      <table>
        <thead>
          <tr>
          <th>Date de transaction</th>
            <th>Provenence</th>
            <th>Montant</th>
            <th>Action</th>
          </tr>
            
        </thead>
        <tbody >
    {datas.map((dat, index) => (
       
      <tr  key={index}>
        <td>{dat.data_de_tansaction}</td>
        <td>{dat.Provenence}</td>
        <td>{dat.Montant}$</td>
        <td>{dat.Action}</td>
      </tr>
     
    ))}
   </tbody>
</table>
  
    </div>
    </>
  )
}

export default LesEntres
