import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainPage } from './MainPage'

//https://sanic11bk.github.io/page/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
