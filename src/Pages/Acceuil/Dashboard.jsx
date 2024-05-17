import React from 'react'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Menucomponent from './component/Menucomponent'
import { Box,Button } from '@mui/material'
import TableauResultat from './component/TableauResultat'
import MonCompt from './component/MonCompt'
import Paramettre from './component/Paramettre'
import { useNavigate } from 'react-router-dom'


function Dashboard() {

  const navigate= useNavigate();
  const handleEntre=()=>{
     navigate("/entre")
  } 
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
    <Button
        sx={{color:"white"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
     
      >
        Les sorties
      </Button>
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

    <div className='div_two'>
      <nav>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque eligendi quod non dicta assumenda. 
          Laboriosam quam pariatur mollitia repellat nihil obcaecati, facilis fugiat quo neque et dolore, 
          architecto omnis repudiandae.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, odit accusantium beatae labore quasi suscipit quibusdam ea esse at totam excepturi in minus perferendis itaque consequuntur nobis adipisci natus. Facilis.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque eligendi quod non dicta assumenda. 
          Laboriosam quam pariatur mollitia repellat nihil obcaecati, facilis fugiat quo neque et dolore, 
          architecto omnis repudiandae.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, odit accusantium beatae labore quasi suscipit quibusdam ea esse at totam excepturi in minus perferendis itaque consequuntur nobis adipisci natus. Facilis.</p>
      </nav>
      <nav className='image_nav'>
        <img src="public\wallet_image-removebg-preview.png" alt="image" />
      </nav>
    </div>
   </>
  


  )
}

export default Dashboard
