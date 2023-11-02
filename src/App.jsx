import { ToastContainer } from "react-toastify";
import Route from "./routes/Route";

function App() {
    return (
        <>
            <Route />
            <ToastContainer position="bottom-center" autoClose={3000} theme="colored" />
        </>
    );
}

export default App;
