import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from '../Components/Nav'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>home</div>
    },
    {
        path: '/about',
        element: <div>about</div>
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
