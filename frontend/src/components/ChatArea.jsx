import MessageInput from './MessageInput';
import axiosInstance from '../api/axios';

export default function ChatArea({ name, status }) {
    const there = true;
    if (there) {
        const fetchMessage = async () => {
            try {
                const response = await axiosInstance.get('/home/687dce8a77d29557df05b90a');
                console.log(response.data); // ✅ Store response in state
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchMessage();
        return (
            <div className="flex-1 flex flex-col">
                {/* Messages */}
                <div className='bg-base-300 w-[100%] p-5'>
                    <h1 className='font-extrabold'>{name}</h1>
                    <p className='font-extralight text-xs'>{status}</p>
                </div>
                <div className="chat p-5 chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">Hey!</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble">Hey, what's up?</div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>

                {/* Fixed Input */}
                <div className='bottom-5 fixed w-[75%]'>
                    <MessageInput />
                </div>

            </div>
        );
    } else {
        return (
            <div>
                no message
            </div>
        );
    }

}
