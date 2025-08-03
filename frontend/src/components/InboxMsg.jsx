

const InboxMsg = ({txt, name, sent}) => {
    return (
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
                {name}
                <time className="text-xs opacity-50">{sent}</time>
            </div>
            <div className="chat-bubble">{txt}</div>
            <div className="chat-footer opacity-50">Delivered</div>
        </div>
    )
}

export default InboxMsg