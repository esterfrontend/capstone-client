import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage/HomePage";
import CreateCasePage from "../pages/CreateCasePage/CreateCasePage";
import SchoolsPage from "../pages/SchoolsPage/SchoolsPage";
import LoaderSchoolsPage from "../pages/SchoolsPage/LoaderSchoolsPage";
import ProfessionalsPage from "../pages/ProfessionalsPage/ProfessionalsPage";
import LoaderProfessionalsPage from "../pages/ProfessionalsPage/LoaderProfessionalsPage";

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
                    path: "/nuevo-caso",
                    element: <CreateCasePage />,
                },
                {
                    path: "/colegios",
                    element: <SchoolsPage />,
                    loader: LoaderSchoolsPage
                },
                {
                    path: "/psicologos",
                    element: <ProfessionalsPage/>,
                    loader: LoaderProfessionalsPage
                },
            ]
        }
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes