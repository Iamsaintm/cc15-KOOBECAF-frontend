import React from "react";
import formatTimeAgo from "../../utils/time-ago";
import { useSelector } from "react-redux";

function ChatBody({ messages, lastMessageRef, typingStatus, authUserData }) {
    return (
        <>
            <div className="w-full max-h-[570px] h-screen p-5 overflow-y-scroll bg-white">
                {/* Message sent from you  */}
                {messages?.map((message) =>
                    message.senderId === authUserData?.id ? (
                        <div className="flex flex-col justify-end items-end" key={message.id}>
                            <div className="flex text-lg">{message.name}</div>
                            <div className="bg-blue-500 text-white max-w-fit px-3 py-1 border rounded-xl text-lg ">
                                {message.text}
                            </div>
                        </div>
                    ) : (
                        /*  Message from your friend */
                        <div className="text-sm" key={message.id}>
                            <div className="flex text-lg">{message.name}</div>
                            <div className="bg-slate-200 text-black max-w-fit px-3 py-1 rounded-xl text-lg">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ),
                )}

                {/* Trigger when typing message  */}
                <div className="fixed bottom-14 text-xs">
                    <p> {typingStatus} </p>
                </div>
                <div ref={lastMessageRef} />
            </div>
        </>
    );
}

export default ChatBody;
