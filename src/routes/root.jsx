import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
            oi
            <RouterProvider router={router}/>
        </>
    )
}
