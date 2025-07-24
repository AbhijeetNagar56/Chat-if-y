import ContactItem from './ContactItem';

export default function Sidebar() {
  const contacts = [
    { name: "John Doe", lastMessage: "Hey, what's up?" },
    { name: "Alice", lastMessage: "Let's meet tomorrow" },
  ];

  return (
    <div className="border-r overflow-y-auto">
      {contacts.map((c, i) => (
        <ContactItem key={i} name={c.name} lastMessage={c.lastMessage} />
      ))}
    </div>
  );
}
