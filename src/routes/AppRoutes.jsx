import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import CreateCasePage from "../pages/CreateCasePage/CreateCasePage";
import SchoolsPage from "../pages/SchoolsPage/SchoolsPage";
import LoaderSchoolsPage from "../pages/SchoolsPage/LoaderSchoolsPage";
import ProfessionalsPage from "../pages/ProfessionalsPage/ProfessionalsPage";
import LoaderProfessionalsPage from "../pages/ProfessionalsPage/LoaderProfessionalsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import MyCasesPage from "../pages/MyCasesPage/MyCasesPage";
import LoaderCasesPage from "../pages/MyCasesPage/LoaderCasesPage";
import CaseDetailsPage from "../pages/CaseDetailsPage/CaseDetailsPage";
import LoaderCaseDetailsPage from '../pages/CaseDetailsPage/LoaderCaseDetailsPage'
import LoaderHomePage from '../pages/HomePage/LoaderHomePage'
import MyPartner from "../pages/MyPartner/MyPartner";

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                    loader: LoaderHomePage
                },
                {
                    path: "/inicio-sesion",
                    element: <LoginPage />,
                },
                {
                    path: "/registrarse",
                    element: <SignupPage />,
                    loader: LoaderProfessionalsPage
                },
                {
                    path: "/nuevo-caso",
                    element: <CreateCasePage />,
                    loader: LoaderSchoolsPage
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
                            <MyPartner/>
                        </AuthMiddleware>
                    ),
                },
                {
                    path: "/colegios-asociados",
                    element: (
                        <AuthMiddleware>
                            <MyPartner/>
                        </AuthMiddleware>
                    ),
                },
                {
                    path: "/mis-casos/:case_id",
                    element: (
                        <AuthMiddleware>
                            <CaseDetailsPage />
                        </AuthMiddleware>
                    ),
                    loader: LoaderCaseDetailsPage
                }
            ]
        }
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes