import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Acceuil/Dashboard.jsx'
import Connexion from './Pages/connexion/Connexion.jsx'
import Inscription from './Pages/Inscription/Inscription.jsx'
import { Toaster } from 'react-hot-toast'


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
