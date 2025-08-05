
import axiosInstance from '../api/axios';
import { useEffect, useState } from 'react';
import Sended from './Sended';
import Inboxmsg from './InboxMsg';

export default function ChatArea({ person, myId }) {
    if (person === undefined || Object.keys(person).length === 0) {
        return <div className='mt-[30%] ml-[40%] text-5xl'>Start Conversation</div>;
    }
    const [msg, setMsg] = useState([]);
    const [text, setText] = useState('');
    const sendMsg = async () => {
        try {
            const response = await axiosInstance.post(`/home/${person._id}`, {
                content: text
            });
            console.log('Message sent:', response.data);
            setText('');
            fetchMessage(); // Refresh messages after sending
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
    const fetchMessage = async () => {
        try {
            const response = await axiosInstance.get(`/home/${person._id}`);
            setMsg(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };
    useEffect(() => {
        if (person) fetchMessage();
    }, [person]);

    


    return (
        <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="bg-base-300 w-full p-5">
                <h1 className="font-extrabold">{person.name}</h1>
                <p className="font-extralight text-xs">{person.email}</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto mb-[10%] p-4">
                {msg.map((c) =>
                    String(c.sender) === String(myId._id) ? (
                        <Sended key={c._id} txt={c.content} />
                    ) : (
                        <Inboxmsg key={c._id} txt={c.content} name={person.name} sent={person.createdAt} />
                    )
                )}
            </div>

            {/* Input */}
            <div className="fixed bottom-5 w-[75%]">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[100%] border p-4">
                    <div className="justify-center join">
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="input w-[80%] join-item" placeholder="Type..." />
                        <button onClick={sendMsg} className="btn btn-accent join-item">send</button>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

