import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function Authenticated({children}) {
    const authUser = useSelector(state => state.auth.authUserData); 

    if(!authUser) {
        return <Navigate to="/login" />
    }
    return children;
}

export default Authenticated