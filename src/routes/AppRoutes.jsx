import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage/HomePage";
import CreateCasePage from "../pages/CreateCasePage/CreateCasePage";
import SchoolsPage from "../pages/SchoolsPage/SchoolsPage";
import LoaderSchoolsPage from "../pages/SchoolsPage/LoaderSchoolsPage";
import ProfessionalsPage from "../pages/ProfessionalsPage/ProfessionalsPage";
import LoaderProfessionalsPage from "../pages/ProfessionalsPage/LoaderProfessionalsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import LoaderCasesPage from "../pages/MyCasesPage/LoaderCasesPage";
import CaseDetailsPage from "../pages/CaseDetailsPage/CaseDetailsPage";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import MyCasesPage from "../pages/MyCasesPage/MyCasesPage";

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
                    path: "/inicio-sesion",
                    element: <LoginPage />,
                },
                {
                    path: "/registrarse",
                    element: <SignupPage />,
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
                {
                    path: "/mi-perfil",
                    element: (
                        <AuthMiddleware>
                            <ProfilePage />
                        </AuthMiddleware>
                    ),
                },
                {
                    path: "/mis-casos",
                    element: (
                        <AuthMiddleware>
                            <MyCasesPage />
                        </AuthMiddleware>
                    ),
                    loader: LoaderCasesPage
                },
                {
                    path: "/psicologo-asociado",
                    element: (
                        <AuthMiddleware>
                            <ProfilePage />
                        </AuthMiddleware>
                    ),
                },
                {
                    path: "/mis-casos/caso",
                    element: (
                        <AuthMiddleware>
                            <CaseDetailsPage />
                        </AuthMiddleware>
                    ),
                }
            ]
        }
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes