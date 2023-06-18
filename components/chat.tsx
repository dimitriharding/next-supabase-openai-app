"use client";

import { Session } from "@supabase/supabase-js";
import { useChat } from "ai/react";
import ChatMessage from "./chat-message";
import { HiOutlineUserCircle, HiOutlineSparkles } from "react-icons/hi2";
// Make sure to provide the correct path to ChatMessage.

export default function ChatComponent({
  session,
}: {
  session: Session | null;
}) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.length > 0
        ? messages.map((m) => (
            <ChatMessage
              key={m.id}
              avatar={
                m.role === "user" ? (
                  <HiOutlineUserCircle />
                ) : (
                  <HiOutlineSparkles />
                )
              }
              name={m.role === "user" ? "User" : "AI"}
              isStart={m.role === "user"}
              message={m.content}
            />
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          disabled={!session}
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder={session ? "Say something..." : "Sign in to chat!"}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
