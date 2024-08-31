import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/UI/Header/Header.jsx'
import Footer from './components/UI/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <App />
        <Footer />
    </StrictMode >

)
