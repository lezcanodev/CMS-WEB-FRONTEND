import { createBrowserRouter, RouteObject } from 'react-router-dom';
import DashboardLayout from '../layouts/dasboard.Layout';
import Home from '../pages/dashboard/Home';

// Paginas
import { RegisterPage } from '../pages/seguridad/register.page';
import { LoginPage } from '../pages/seguridad/login.page';
import { InicioPage } from '../pages/sitioweb/Inicio/Inicio';
import { MainLayout } from '../layouts/MainLayout';
import { BASE_URL } from './helpers';


const PublicRoutes: RouteObject[] = [
  {
    path: BASE_URL,
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <InicioPage/>
      },
      {
        path: "seguridad",
        element: <MainLayout/>,
        children: [
          {
            path: "ingresar",
            element: <LoginPage />
          },
          {
            path: "registrarse",
            element: <RegisterPage />,
          }
        ]
      }
    ]
  }
];

const PrivateRoutes: RouteObject[] = [
  {
    path: BASE_URL+'dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        path:'home',
        element: <Home/>
      }
    ]
  }
]

export const router = createBrowserRouter([
    ...PublicRoutes,
    ...PrivateRoutes
]);