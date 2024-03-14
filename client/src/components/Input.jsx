import { useState } from "react";

const Input = ({ socket, setAllMessages }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendClick = (e) => {
    e.preventDefault();
    if (newMessage !== "" && newMessage.trim() !== "") {
      let data = {
        username: sessionStorage.getItem("username"),
        msgType: "message",
        message: newMessage,
      };
      setAllMessages((allMessages) => [...allMessages, data]);
      socket.emit("send-new-message", data);
    }
    setNewMessage("");
  };

  return (
    <form
      className=" absolute bottom-6 left-6 right-6 flex"
      onSubmit={handleSendClick}
    >
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-r-md"
      >
        Send
      </button>
    </form>
  );
};

export default Input;
