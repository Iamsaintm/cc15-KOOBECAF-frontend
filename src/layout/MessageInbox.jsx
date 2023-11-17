import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";

function MessageInbox() {
    return (
        <>
            <div className="flex gap-2 pb-4">
                <div className="sticky">
                    <Link to={`/inbox`}>
                        <AiOutlineMessage className="w-16 h-16" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MessageInbox;
