import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BabyApp } from './BabyApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BabyApp />
    </BrowserRouter>
  </React.StrictMode>,
)
