import MessageInput from './MessageInput';
import axiosInstance from '../api/axios';
import { useEffect, useState } from 'react';
import Sended from './Sended';

export default function ChatArea({ person }) {
    if (person) {
        const [msg, setmsg] = useState([]);
        const fetchMessage = async () => {
            try {
                const response = await axiosInstance.get(`/home/${person._id}`);
                setmsg(response.data, person._idx);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchMessage()
        // useEffect(() => {
        //     const fetchMessage = async () => {
        //         try {
        //             const response = await axiosInstance.get(`/home/${person._id}`);
        //             setmsg(response.data, person._idx);
        //         } catch (error) {
        //             console.error('Error fetching users:', error);
        //         }
        //     }
        //     fetchMessage()
        // }, []); // Empty dependency array to run only once
        return (
            <div className="flex-1 flex flex-col">
                {/* Messages */}
                <div className='bg-base-300 w-[100%] p-5'>
                    <h1 className='font-extrabold'>{person.name}</h1>
                    <p className='font-extralight text-xs'>{person.email}</p>
                </div>
                {msg.map((c) => (
                    <Sended key={c._id} txt={c.content} />
                ))}

                {/* Fixed Input */}
                <div className='bottom-5 fixed w-[75%]'>
                    <MessageInput toId={person._id} />
                </div>

            </div>
        );
    } else {
        return (
            <div>
                No Message
            </div>
        );
    }

}
