import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from '../Components/Nav/Nav'
import Products from '../Pages/Products/Products'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Footer from '../Components/Footer/Footer'

import './index.css'
import Home from '../Pages/Home/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/contact',
        element: <Contact />
    },
])

export default function Root() {
    return (
        <main>
            <Nav />
            <RouterProvider router={router} />
            <Footer />
        </main>
    )
}
