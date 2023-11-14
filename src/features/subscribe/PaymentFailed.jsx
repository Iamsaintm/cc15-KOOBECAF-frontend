import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function PaymentFailed() {
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
