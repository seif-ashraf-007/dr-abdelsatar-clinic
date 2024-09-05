import Home from './pages/HomePage/HomePage'
import Locations from './pages/LocationsPage/LocationsPage'
import Book from './pages/BookPage/Book'

import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
    <Router>
        <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/locations' element={<Locations />} />
                <Route path='/book' element={<Book />} />
            </Routes>
        <Footer />
    </Router>
  )
}

export default App
