import { useState } from "react";
import { Link } from "react-router";

interface User {
  id: number;
  name: string;
  avatar: string;
}

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
}

interface UserChatProps {
  selectedUser: User | null;
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const UserChat = ({ selectedUser, messages, onSendMessage }: UserChatProps) => {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col w-3/4">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 border-b bg-base-100">
        <div className="flex items-center gap-3">
          {selectedUser && (
            <>
              <img
                src={selectedUser.avatar}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold">
                {selectedUser.name}
              </span>
            </>
          )}
        </div>

        {/* Profile dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/150?img=5" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow"
          >
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-base-200">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat ${
              msg.sender === "me" ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t flex gap-2 bg-base-100">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default UserChat;