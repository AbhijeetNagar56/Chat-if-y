

export default function ContactItem({ name, lastMessage }) {
  return (
    <div className="p-4 border-b-2 cursor-pointer">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm">{lastMessage}</p>
    </div>
  );
}
