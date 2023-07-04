import REACT, { useEffect, useRef, useState } from "react";
// NULL을 사용하려면 REACT를 import 해줘야함
import "./Chatpage.css";
import Inputbox from "./Inputbox";

const Chatpage = () => {
  const [newSocket, setNewSocket] = useState(null);
  const [recievedMessage, setRecievedMessage] = useState([]);
  const [myUUID, setMyUUID] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    socket.onopen = () => {
      console.log("CONNECTION CONNECTED");
      setNewSocket(socket);
    };

    socket.onmessage = (e) => {
      const parsedData = JSON.parse(e.data);
      if (parsedData.uuid) {
        setMyUUID(parsedData.uuid);
      } else {
        setRecievedMessage((prev) => [...prev, ...parsedData]);
      }
    };
    socket.onclose = () => {
      console.log("CONNECTION CLOSED");
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessageHandler = (data) => {
    if (newSocket !== null) {
      let now = new Date();
      let nowformat =
        now.getFullYear() +
        "/" +
        now.getMonth() +
        "/" +
        now.getDate() +
        " " +
        now.getHours() +
        ":" +
        now.getMinutes();
      const sendData = [
        {
          text_body: String(data),
          write_time: nowformat,
          writer_id: myUUID,
        },
      ];
      console.log(sendData);
      newSocket.send(JSON.stringify(sendData));
    } else alert("상대방에게 메세지를 보낼 수 없는 상태입니다.");
  };

  return (
    <div className="page-container">
      <div className="chat-container">
        {recievedMessage &&
          recievedMessage.map((item, index) => (
            <div>
              {item.writer_id === myUUID && (
                <div className="chat-container__chat__usr">
                  <div className="chat-container__chat">
                    {item.text_body}
                  </div>
                  <div className="chat-container__time">
                    {item.write_time}
                  </div>
                </div>
              )}
              {item.writer_id !== myUUID && (
                <div className="chat-container__chat__other">
                  <div className="chat-container__chat">
                    {item.text_body}
                  </div>
                  <div className="chat-container__time">
                    {item.write_time}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
      <Inputbox
        onSendMessage={(messageData) => sendMessageHandler(messageData)}
      />
    </div>
  );
};

export default Chatpage;