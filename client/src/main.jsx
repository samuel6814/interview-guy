import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Who from './Components/Who'
import Catalog from './Components/Catalog'
import ProjectEntry from './Components/ProjectEntry'
import Help from './Components/Help'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/catalog" element={<Catalog/>} />
      <Route path="/project" element={<ProjectEntry/>} />
      <Route path="/contact" element={<Help/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
