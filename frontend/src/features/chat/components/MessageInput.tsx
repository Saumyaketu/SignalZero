import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
  placeholder?: string;
  buttonLabel?: string;
}

function MessageInput({
  onSend,
  placeholder = "Type message...",
  buttonLabel = "Send",
}: Props) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  }

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 rounded-xl bg-zinc-800 px-4 py-3 outline-none"
        placeholder="Type message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={send}
        className="bg-blue-600 px-5 rounded-xl hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
