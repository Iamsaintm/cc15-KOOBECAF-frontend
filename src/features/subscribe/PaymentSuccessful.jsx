import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createSubscribe } from "../../stores/slices/paymentSlice";
import Button from "../../components/Button";

export default function paymentSuccessful() {
    const dispatch = useDispatch();
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const transactionId = query.get("transactionId");
        if (query.get("success")) {
            dispatch(createSubscribe(transactionId));
        }
    }, []);

    return (
        <>
            <div className="pt-8">
                <Link to="/">
                    <Button>Go Home</Button>
                </Link>
            </div>
        </>
    );
}
