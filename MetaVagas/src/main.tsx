import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style/global.ts'
import { Router } from './components/routes/index.tsx'
import { GlobalStyle } from './assets/style/global.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
)
