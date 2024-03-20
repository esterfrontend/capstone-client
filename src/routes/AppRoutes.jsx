import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage/HomePage";
import CreateCasePage from "../pages/CreateCasePage/CreateCasePage";
import CaseDetailsPage from "../pages/CaseDetailsPage/CaseDetailsPage";

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
                {
                    path: "/casos/caso",
                    element: <CaseDetailsPage />,
                },
            ]
        }
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes