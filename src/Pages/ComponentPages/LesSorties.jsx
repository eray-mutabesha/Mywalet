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
import { useState,useEffect } from 'react';
import Projet from '../Acceuil/component/Projet';







function LesSorties() {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const [tresorerieOptions, settresorerieOptions] = useState([]);
    
    const navigate=useNavigate()
    const handleAcceuil=()=>{
        navigate("/")
      }
    const handleEntre=()=>{
        navigate("/entre")
     } 
    const { register, handleSubmit,formState:{errors} } = useForm();
    const { onChange} = register('select'); 
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
    
    useEffect(()=>{
      tresorerieOptionsFn();
    },[])


    const onSubmit=(data)=>{
        //  pour enregistrer les sorties 
        axios.post(`${BASE_URL}/insert_sorties`,data)
       .then(({data})=>{
      if (data.status == 500) {
        toast.error("Il a une erreur")
      } else {
        console.log(data)
    
        toast.success("sotie reussie")
      }
      
    }).catch((err)=>{
      console.log(err)
      toast.error("Il a une erreur")
    })
       }



  return (
   <><div className='div_one'>
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
   
   <div >
   <Stack 
      alignItems={"center"} justifyContent={"center"}
      width={"100%"} height={"90vh"}>
        <Box  width={400} 
        sx={{backgroundColor:"white",
            padding:3
        }}>
        <Typography variant="h5">
          Faire un retrait
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
            display:"grid",
            gap:2
        }}>
  
       <TextField id="filled-basic"  variant="outlined" type="date" fullWidth size='small' 
         {...register("data_de_tansaction", { required:"Veillez entrez la date de transaction"})}/>
          {errors.data_de_tansaction&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

        <TextField id="filled-basic" label="Provenence" variant="outlined" type="text" fullWidth size='small' 
         {...register("Provenence", { required:"Veillez entrez la provenence",minLength:{required:
            "Veillez entrez le provenence"
         }})}/>
          {errors.Provenence&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

          <TextField id="filled-basic" label="Montant" variant="outlined" type="number" fullWidth size='small' 
         {...register("Montant", { required:"Veillez entrez le montant",minLength:{required:
            "Veillez entrez le montant"
         }})}/>
          {errors.Montant&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

          <TextField id="filled-basic" label="Action" variant="outlined" type="text" fullWidth size='small' 
         {...register("Action", { required:"Veillez entrez l'action ",minLength:{required:
            "Veillez entrez l'action"
         }})}/>
        <select className='select' name="" id="" onChange={onChange}  {...register("select", { required:"Veillez entrez l'action "})}>
            <option value="">select tresorerie</option>
            {tresorerieOptions.map((item,index)=>(
              <option key={index} value={item.id}>{item.designation}</option>
            ))}
            
          </select>
  
        </Box>
        <Box sx={{
          
          display:"flex",
          justifyContent: "space-between"
        }}>
        <Button variant="contained" sx={{marginTop:2}} type="submit">Faire un retrait</Button>
        </Box>
        </form>
        </Box>
      </Stack>
        </div>
   </>
  )
}

export default LesSorties
