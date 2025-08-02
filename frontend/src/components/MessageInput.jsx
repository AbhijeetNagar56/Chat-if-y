import { useState } from "react";
import axiosInstance from "../api/axios";



export default function MessageInput({toId}) {
  const [text, setText] = useState('');
  const sendMsg = async () => {
    
    try {
      const response = await axiosInstance.post(`/home/${toId}`, {
        content:text
      });
      console.log('Message sent:', response.data);
      setText('');
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[100%] border p-4">
        <div className="justify-center join">
          <input type="text" value={ text } onChange={(e) => setText(e.target.value)} className="input w-[80%] join-item" placeholder="Type..." />
          <button onClick={sendMsg} className="btn btn-accent join-item">send</button>
        </div>
      </fieldset>
    </div>
  );
}
