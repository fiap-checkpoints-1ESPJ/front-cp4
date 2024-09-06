import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from '../Components/Nav'
import Products from '../Pages/Products/Products'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>home</div>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/products',
        element: <Products/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
])

export default function Root() {
    return (
        <>
            <Nav/>
            <RouterProvider router={router}/>
        </>
    )
}
