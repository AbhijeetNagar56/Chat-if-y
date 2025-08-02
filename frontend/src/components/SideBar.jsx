import ContactItem from './ContactItem';

export default function Sidebar({users}) {
  return (
    <div className="border-r overflow-y-auto">
      {users.map((c) => (
        <ContactItem key={c._id} name={c.name} lastMessage={c.email} />
      ))}
    </div>
  );
}
