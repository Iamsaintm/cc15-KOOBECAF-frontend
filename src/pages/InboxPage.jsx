import ListChatContainer from "../features/chat/ListChatContainer";
import { FaInbox } from "react-icons/fa";

function InboxPage() {
    return (
        <>
            <div className="flex flex-col w-full bg-main-light h-screen">
                <div className="flex">
                    <div className="min-w-[360px]"></div>
                    <div className="flex w-full">
                        <div className="py-3 px-6 w-full">
                            <div className="flex justify-center gap-5">
                                <div className="flex text-3xl ">
                                    <FaInbox />
                                </div>
                                <div className="text-center text-3xl">Inbox</div>
                            </div>
                            <div className="flex flex-col pt-2">
                                <ListChatContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InboxPage;
