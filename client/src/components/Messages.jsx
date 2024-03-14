import React, { useEffect, useRef } from "react";

const Messages = ({ socket, allMessages, setAllMessages }) => {
  // used for scroll down to see the latest message
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

  
  useEffect(() => {
    socket.on("recieve-message", (msg) => {
      setAllMessages((prevMessage) => [...prevMessage, msg]);
    });

    return () => socket.off("recieve-message");
  }, [socket]);

  return (
    <div className="mx-10 pt-10 flex flex-col items-start overflow-y-auto max-h-[90%] message">
      {allMessages.length > 0 &&
        allMessages.map((data) => {
          return data.msgType === "connection" ? (
            <div
              key={data.message}
              className="text-center py-2 px-4 bg-red-400 rounded-xl mb-4"
            >
              {data.message}
            </div>
          ) : (
            <div key={data.message}>
              <h5 className="font-bold p-1 text-md">{data.username}</h5>
              <p className="bg-zinc-200 p-2 max-w-xl rounded-xl mb-4">
                {data.message}
              </p>
            </div>
          );
        })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
