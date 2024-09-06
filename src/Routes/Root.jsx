import Nav from '../Components/Nav/Nav'
import Products from '../Pages/Products/Products'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Footer from '../Components/Footer/Footer'

import './index.css'
import Home from '../Pages/Home/Home'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

export default function Root() {
    return (
        <main>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main>
    )
}
