interface User {
  id: number;
  name: string;
  avatar: string;
}

interface UsersProps {
  users: User[];
  selectedUser: User | null;
  onSelectUser: (user: User) => void;
}

const Users = ({ users, selectedUser, onSelectUser }: UsersProps) => {
  return (
    <div className="w-1/4 bg-base-200 p-4">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-base-300 ${
              selectedUser?.id === user.id ? "bg-base-300" : ""
            }`}
            onClick={() => onSelectUser(user)}
          >
            <img
              src={user.avatar}
              className="w-10 h-10 rounded-full"
            />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;