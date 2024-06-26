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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Tresoreries() {
    const navigate=useNavigate()
    const handleAcceuil=()=>{
        navigate("/")
      }
    const handleEntre=()=>{
        navigate("/entre")
     } 
    const { register, handleSubmit,reset,formState:{errors} } = useForm();
    const onSubmit=(data)=>{
        // gateway pour enregistrer les sorties 
        axios.post("http://localhost:3000/sorties",data).then((res)=>{
          console.log(res)
          toast.success("Retrait d'argent effectuer")
          reset()
          
        }).catch((err)=>{
          console.log(err)
          toast.err("Il a une erreur")
        })
       }

       const [age, setAge] = React.useState('');

       const handleChange = (event) => {
         setAge(event.target.value);
       };

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
  
        <TextField id="filled-basic" label="Designation" variant="outlined" type="text" fullWidth size='small' 
         {...register("designation", { required:"Veillez entrez une designation"})}/>
          {errors.designation&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

       

          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Compte</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Airtel money</MenuItem>
          <MenuItem value={20}>Orange Money</MenuItem>
          <MenuItem value={30}>PayPal</MenuItem>
        </Select>
      </FormControl>
        {errors.type_de_compte&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}



          <TextField id="montant" label="Montant" variant="outlined" type="number" fullWidth size='small' 
         {...register("montant", { required:"Veillez entrez la montant"})}/>
          {errors.mot_depasse&& <span sx={{color:"red"}}>Ce champ est obligatoire</span>}

  
        </Box>
        <Box sx={{
          display:"flex",
          justifyContent: "space-between"
        }}>
        <Button variant="contained" sx={{marginTop:2}} type="submit">Enregistrer</Button>
        </Box>
        </form>
        </Box>
      </Stack>
        </div>
   </>
  )
}

export default Tresoreries