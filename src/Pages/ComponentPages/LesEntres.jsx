import React from 'react';
import './components.css/LesEntres.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Stack, Box, Button, Link, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TableauResultat from '../Acceuil/component/TableauResultat';
import MonCompt from '../Acceuil/component/MonCompt';
import Paramettre from '../Acceuil/component/Paramettre';
import Projet from '../Acceuil/component/Projet';
import Sorties from '../Acceuil/component/Sorties';
import Dashboard from '../Acceuil/Dashboard';
import { isEmpty } from '../../Outils';
import toast from 'react-hot-toast'; 


function LesEntres() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [datas, setDatas] = useState([]);
  const [singleEntre, setSingleEntre] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const navigate = useNavigate();

  const handleAcceuil = () => {
    navigate("/");
  };

  const handleEntre = () => {
    navigate("/entre");
  };

  const getToutLesEntres = () => {
    axios.get(`${BASE_URL}/get_entreData`)
      .then(({ data }) => {
        console.log(data);
        setDatas(data.data || []); 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  };

  useEffect(() => {
    getToutLesEntres();
  }, []);

  const deleteEntree = (model) => {
    axios.delete(`${BASE_URL}/deleteEntree/${model.id}`)
      .then(({ data }) => {
        console.log(data);
        setDatas(data.data || []); // Assurer que data.data est un tableau
        getToutLesEntres();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  };


  const handleUpdate = () => {
    setFormVisible(false);
    getToutLesEntres();
  };

const EditEntre=(modal)=>{
  setSingleEntre(modal)
  setFormVisible(true)
}


if (formVisible==false) {
  return (
    <>
      <div className='div_one'>
        <nav>
          <Box>
            <Button
              sx={{ color: "white" }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleAcceuil}
            >
              Acceuil
            </Button>
          </Box>
        </nav>
        <nav><Box><TableauResultat /></Box></nav>
        <nav>
          <Box>
            <Button
              sx={{ color: "white" }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleEntre}
            >
              Les entres
            </Button>
          </Box>
        </nav>
        <nav><Box><Sorties /></Box></nav>
        <nav><Box><Projet /></Box></nav>
        <nav><Paramettre /></nav>
      </div>

      <div>
        <h1>TOUT LES DÉPÔTS</h1>
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
          <tbody>
            {datas.length > 0 ? datas.map((dat, index) => (
              <tr key={index}>
                <td>{!isEmpty(dat) && dat.date_transaction}</td>
                <td>{!isEmpty(dat) && dat.provenance}</td>
                <td>{!isEmpty(dat) && dat.montant}$</td>
                <td>{!isEmpty(dat) && dat.action}</td>
                <td>{!isEmpty(dat) && dat.designation}</td>
                <td className='action'>
                  <img src='public/editPhoto-removebg-preview.png' className='corbeil_image' onClick={() => EditEntre(dat)}/>
                  <img src='public/up_2.png' className='corbeil_image' />
                  <img src='/public/delete_corbrille.png' className='corbeil_image' onClick={() => deleteEntree(dat)} />
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6">Aucune donnée disponible</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
} else{
  return <Dashboard singleEntre={singleEntre}  onUpdate={handleUpdate}/>
}
} 

  

export default LesEntres;
