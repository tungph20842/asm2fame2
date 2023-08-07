import { createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./components/Layouts/LayoutWebsite";
import LayoutAdmin from "./components/Layouts/LayoutAdmin";
import { Navigate } from "react-router-dom";
import AdminProduct from "./pages/admin/product";
import AdminProductAdd from "./pages/admin/product/add";
import AdminProductEdit from "./pages/admin/product/edit";
import Details from "./pages/detail";

export const router = createBrowserRouter([
    { path: "/", element: <LayoutWebsite /> },
    { path: "/:id", element: <Details /> },

    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="product" /> },
            {
                path: "product",
                element: <AdminProduct />,
            },
            {
                path: "product/add",
                element: <AdminProductAdd />,
            },
            {
                path: "product/:idProduct/edit",
                element: <AdminProductEdit />,
            },
        ],
    },
]);
