import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "../layout/NavLayout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { profile } from "../api";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <NavLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            }
        ]
    }
])
