import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { MainPage } from './pages/mainPage/MainPage'
import  './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>,
)
