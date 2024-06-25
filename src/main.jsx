import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Acceuil/Dashboard.jsx'
import Connexion from './Pages/connexion/Connexion.jsx'
import Inscription from './Pages/Inscription/Inscription.jsx'
import LesEntres from './Pages/ComponentPages/LesEntres.jsx'
import { Toaster } from 'react-hot-toast'
import LesSorties from './Pages/ComponentPages/LesSorties.jsx'
import TableauDesSorties from './Pages/ComponentPages/TableauDesSorties.jsx'
import UtilisateurPage from './Pages/ComponentPages/UtilisateurPage.jsx'
import Deconnexion from './Pages/ComponentPages/Deconnexion.jsx'
import Projets from './Pages/ComponentPages/Projets.jsx'
import TableaudesProjets from './Pages/ComponentPages/TableaudesProjets.jsx'
import Tresoreries from './Pages/ComponentPages/Tresoreries.jsx'



// routes
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Dashboard/>
  },
  {
    path:"/connexion",
    element:<Connexion/>
  },
  {
    path:"/inscription",
    element:<Inscription />
  },
  {
    path:"/entre",
    element:<LesEntres />
  },
  {
    path:"/sorties",
    element:<LesSorties />
  },
  {
    path:"/tableaudessorties",
    element:<TableauDesSorties />
  },
  {
    path:"/pageutilisateur",
    element:<UtilisateurPage />
  },
  {
   path:"/deconnexion",
   element:<Deconnexion />
  },
  {
    path:"/projet",
    element:<Projets />
   },
   {
    path:"/tableaudesprojet",
    element:<TableaudesProjets />
   },
   {
    path:"/tresoreries",
    element:<Tresoreries/>
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
   <RouterProvider router={routes}>
   </RouterProvider>
  </React.StrictMode>
,
)
