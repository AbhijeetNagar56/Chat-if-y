import { useState } from "react";
import Users from "../components/Users";
import UserChat from "../components/UserChat";

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

const users: User[] = [
  {
    id: 1,
    name: "Alice",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Bob",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
];

const Home = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(users[0]);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey!", sender: "other" },
    { id: 2, text: "Hello 👋", sender: "me" },
  ]);

  const handleSendMessage = (message: string) => {
    setMessages([
      ...messages,
      { id: Date.now(), text: message, sender: "me" },
    ]);
  };

  return (
    <div className="flex h-screen">
      <Users
        users={users}
        selectedUser={selectedUser}
        onSelectUser={setSelectedUser}
      />
      <UserChat
        selectedUser={selectedUser}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default Home;