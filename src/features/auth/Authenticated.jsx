import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchDataUser } from "../../stores/slices/authSlice";
import { getAccessToken } from "../../utils/local-storage";

function Authenticated({ children }) {
    const authUser = useSelector((state) => state.auth.authUserData);

    if (!authUser) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default Authenticated;
