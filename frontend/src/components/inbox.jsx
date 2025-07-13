const Inbox = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">John Doe</h2>
      <div className="chat chat-start">
        <div className="chat-bubble">Hi there!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Hello! What's up?</div>
      </div>
      <div>
        <input type="text" className="bg-amber-50 text-black w-2xl" />
        <input type="button" value="Send" className="bg-amber-950 w-20" />
      </div>
    </div>
  );
};

export default Inbox;
