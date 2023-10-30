import { ToastContainer } from "react-toastify"
import Route from "./routes/Route"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { fetchDataUser } from "./stores/slices/authSlice";
import { getAccessToken } from "./utils/local-storage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if(getAccessToken()) dispatch(fetchDataUser());
  }, []);

  return (
    <>
      <Route /> 
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="colored"
      />
    </>
  )
}

export default App
