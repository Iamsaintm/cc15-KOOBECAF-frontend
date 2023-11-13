import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductDisplay = () => (
    <section className="flex justify-center mt-20">
        <div>
            <div>
                <h3>Starter plan</h3>
                <h5>159.00 / month</h5>
            </div>
        </div>
        <form>
            <input type="hidden" name="lookup_key" value="standard_monthly" />
            <button type="submit">
                <Link to={"https://buy.stripe.com/test_3cs8xG0pteo13g46oo"}>Checkout</Link>
            </button>
        </form>
    </section>
);

const SuccessDisplay = ({ sessionId }) => {
    return (
        <section className="flex justify-center">
            <div>
                <div>
                    <h3>Subscription to starter plan successful!</h3>
                </div>
            </div>
            <form>
                <input type="hidden" id="session-id" name="session_id" value={sessionId} />
                <button id="checkout-and-portal-button" type="submit">
                    Manage your billing information
                </button>
            </form>
        </section>
    );
};

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function SubscribePage() {
    let [message, setMessage] = useState("");
    let [success, setSuccess] = useState(false);
    let [sessionId, setSessionId] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setSuccess(true);
            setSessionId(query.get("session_id"));
        }

        if (query.get("canceled")) {
            setSuccess(false);
            setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
        }
    }, [sessionId]);

    if (!success && message === "") {
        return <ProductDisplay />;
    } else if (success && sessionId !== "") {
        return <SuccessDisplay sessionId={sessionId} />;
    } else {
        return <Message message={message} />;
    }
}
