import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import LoginPage from "../pages/LoginPage";
import Authenticated from "../features/auth/Authenticated";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import CreateProductPage from "../pages/CreateProductPage";
import CreateItemProductPage from "../pages/CreateItemProductPage";
import SellingPage from "../pages/SellingPage";
import CategoryPage from "../pages/CategoryPage";
import WishlistPage from "../pages/WishlistPage";

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
            { path: "", element: <HomePage /> },
            { path: "/wishlist", element: <WishlistPage /> },
            { path: "/selling", element: <SellingPage /> },
            { path: "/category/:categoryId", element: <CategoryPage /> },
            { path: "/create", element: <CreateProductPage /> },
            { path: "/create/item", element: <CreateItemProductPage /> },
            { path: "/create/vehicle", element: <CreateProductPage /> },
            { path: "/create/rental", element: <CreateProductPage /> },
            { path: "/update/item", element: <CreateItemProductPage /> },
            { path: "/update/vehicle", element: <CreateProductPage /> },
            { path: "/update/rental", element: <CreateProductPage /> },
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
    return <RouterProvider router={router} />;
}

export default Route;
