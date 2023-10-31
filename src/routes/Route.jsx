import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import LoginPage from "../pages/LoginPage";
import Authenticated from "../features/auth/Authenticated";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import CreateProductPage from "../pages/CreateProductPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Authenticated>
                <div className="h-full">
                    <Layout />
                </div>
            </Authenticated>
        ),
        children: [
            {path: "", element: <HomePage />},
            {path: "/create", element: <CreateProductPage />},
        ],
    },
    {
        path: "/login",
        element: (
            <RedirectIfAuthenticated>
                <div className="h-screen">
                    <LoginPage />
                </div>
            </RedirectIfAuthenticated> 
        ),
    },
]);

function Route() {
  return <RouterProvider router={router}/>
}

export default Route