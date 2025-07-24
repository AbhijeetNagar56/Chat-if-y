export default function MessageInput() {
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[100%] border p-4">
        <div className="justify-center join">
          <input type="text" className="input w-[80%] join-item" placeholder="Type..." />
          <button className="btn btn-accent join-item">send</button>
        </div>
      </fieldset>
    </div>
  );
}
