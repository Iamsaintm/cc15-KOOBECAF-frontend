import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../utils/local-storage";

function Authenticated({ children }) {
    const authUser = getAccessToken();

    if (!authUser) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default Authenticated;
