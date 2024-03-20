import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage/HomePage";
import CreateCasePage from "../pages/CreateCasePage/CreateCasePage";

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: "/crear-un-aviso",
                    element: <CreateCasePage />,
                },
            ]
        }
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes