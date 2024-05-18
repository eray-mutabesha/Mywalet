import React from 'react'
import './components.css/LesEntres.css'
import axios from 'axios'
import { useState } from 'react';
function LesEntres() {
  const [datas,setdatas]=useState([])
  
  const getData = async () => {
    
    try {
      // Fetch posts data
      const data = await axios.get('http://localhost:3000/LesEntres');
      setdatas(data.data[0]);
  
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  getData();
    
  return (
    <div>
      <h1>page des entres</h1>
      <table>
        <thead>
          <tr>
          <th>Date de transaction</th>
            <th>Provenence</th>
            <th>Montant</th>
            <th>Action</th>
          </tr>
            
        </thead>
       
{datas.map(dat=>(
         <tbody>
         <tr>
         <td>{dat.data_de_tansaction}</td>
         <td>{dat.Provenence}</td>
         <td>{dat.Montant}</td>
         <td>{dat.Action}</td>
         </tr>
         
        </tbody>
        ))}
       
      
      </table>
    </div>
  )
}

export default LesEntres
