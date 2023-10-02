import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MetaVagas } from "../../pages/metavagas";

export const Router = () => {
    return (
        <RouterProvider router={createBrowserRouter([
            {
                index: true,
                element: <MetaVagas />
            },
            
        ])} />
    )
}