import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function RutasProtegidas() {

    const {loading, isAuthenticated } = useAuth();
    console.log(loading, isAuthenticated)

    if(loading) return <h1>Loading...</h1>

    if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;

    return <Outlet />;

}

export default RutasProtegidas;