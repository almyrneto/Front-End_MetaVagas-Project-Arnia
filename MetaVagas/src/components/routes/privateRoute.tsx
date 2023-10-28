import { Navigate } from "react-router-dom";



export const PrivateRoute = ({ element }: { element: any }) => {

    const isAuthenticated = () => {
        const token = localStorage.getItem("token")
        return !!token;
    };

    if (isAuthenticated()) {
        return element;
    } else {
        return <Navigate to="/login" />
    }
}

