import { useEffect } from "react";
import Navbar from "./Navbar";
import socket from "../config/socket-config";
import { toast } from "react-toastify";

function Header() {
    useEffect(() => {
        socket.on("receiveMessage", (data) => {
            toast.info(data.text);
        });
        return () => {
            socket.off("receiveMessage");
        };
    }, [socket]);

    return (
        <div className="h-full">
            <Navbar />
        </div>
    );
}

export default Header;
