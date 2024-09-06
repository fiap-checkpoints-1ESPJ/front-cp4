import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from '../Components/Nav'
import Products from '../Pages/Products/Products'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>home</div>
    },
    {
        path: '/about',
        element: <div>about</div>
    },
    {
        path: '/products',
        element: <Products/>
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
