import React from "react";

interface ChatMessageProps {
  isStart: boolean;
  avatar: React.ReactNode;
  name: string;
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  isStart,
  avatar,
  name,
  message,
}) => (
  <div className={`chat ${isStart ? "chat-start" : "chat-end"}`}>
    <div className="chat-image avatar">
      <div>{avatar}</div>
    </div>
    <div className="chat-header">{name}</div>
    <div className="chat-bubble">{message}</div>
  </div>
);

export default ChatMessage;
