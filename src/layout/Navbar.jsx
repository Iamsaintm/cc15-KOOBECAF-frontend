import { useDispatch } from "react-redux";
import { MdLibraryAddCheck } from "react-icons/md";
import { logout } from "../stores/slices/authSlice";
import { Link } from "react-router-dom";
import { logoutProduct, resetInputProduct, resetSearchProduct } from "../stores/slices/productSlice";
import DropdownUser from "../components/DropdownUser";
import { removePath } from "../utils/local-storage";

export default function Navbar() {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center h-full px-6 text-white">
            <Link
                onClick={() => {
                    dispatch(resetInputProduct());
                    removePath();
                }}
                to="/"
            >
                <div className="text-4xl font-fontHeader text-white">KOOBECAF</div>
            </Link>
            <div className="flex fixed gap-6 text-lg right-6 items-center ">
                <Link to="/subscribe">
                    <div className="flex justify-center items-center bg-error-light/90 px-2 py-1 rounded-md hover:bg-error-light/70 gap-2">
                        <div>Subscribe</div>
                        <div>
                            <MdLibraryAddCheck />
                        </div>
                    </div>
                </Link>
                <DropdownUser />
            </div>
        </div>
    );
}
