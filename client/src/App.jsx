import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

import Header from "./components/Header";
import Input from "./components/Input";
import Messages from "./components/Messages";

const socket = io("https://kuvaka-server.vercel.app");

function App() {
  const [allMessages, setAllMessages] = useState([]);
  // const [username, setUsername] = useState("")

  useEffect(() => {
    let user = sessionStorage.getItem("username");
    if (!user) {
      user = prompt("Enter your username:");
      if (user) {
        sessionStorage.setItem("username", user);
        socket.emit("set-username", user);
      }
    }
  }, []);

  return (
    <div className="mx-[10%]">
      <Header />
      <div className="h-[80vh] bg-orange-300 relative rounded-bl-md rounded-br-md">
        <Messages
          socket={socket}
          allMessages={allMessages}
          setAllMessages={setAllMessages}
        />
        <Input socket={socket} setAllMessages={setAllMessages} />
      </div>
    </div>
  );
}

export default App;
