import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Router from './pages/Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
