"use client";

import { MessagesSquareIcon } from "lucide-react"; // or use any icon you like

export default function ChatButton() {
  return (
    <button
      className="fixed bottom-9 right-9 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-sm outline-zinc-300"
      aria-label="Chat"
      onClick={() => {
        // Replace this with your chat toggle logic or open a chat window
        alert("Open chat widget");
      }}
    >
      <MessagesSquareIcon className="w-6 h-6" />
    </button>
  );
}
