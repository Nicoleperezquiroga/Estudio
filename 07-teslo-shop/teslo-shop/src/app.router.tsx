import { createBrowserRouter } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { Navigate } from "react-router";
import { DashBoardPage } from "./admin/pages/dashboard/DashBoardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { lazy } from "react";

const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));
const AdminLayouts = lazy(() => import('./admin/layouts/AdminLayouts'));

export const appRouter = createBrowserRouter([
    //RUTAS PÚBLICAS
    {
        path: '/',
        element: <ShopLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage/>
            },
            {
                path: 'gender/:gender',
                element: <GenderPage/>
            }
        ]
    },

    //RUTAS PROTEGIDAS
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                index:true,
                element: <Navigate to="/auth/login"/>
            },
            {
                path:'login',
                element: <LoginPage/>
            },
            {
                path:'register',
                element: <RegisterPage/>
            }
        ]
    },

    //RUTAS DE ADMINISTRACION
    {
        path: '/admin',
        element: <AdminLayouts/>,
        children: [
            {
                index:true,
                element: <DashBoardPage/>
            },
            {
                path: 'products',
                element: <AdminProductsPage/>
            },
            {
                path: 'product/:id',
                element: <AdminProductPage/>
            }
        ]
    }
])