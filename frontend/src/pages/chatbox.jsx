import ChatArea from "../components/ChatArea";
import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";



const Chatbox = () => {
  return (
    <div data-theme = 'forest' className="min-h-screen flex flex-col bg-base-200">
      {/* Top Nav */}
      <NavBar />

      {/* Chat Body */}
      <div className="flex border-t-2  overflow-hidden h-[890px]">
        {/* Sidebar - Contacts */}
        <div className="w-1/4 bg-base-100 shadow-md overflow-y-auto p-4 border-r-2">
          <Sidebar />
        </div>

        {/* Main Chat Area */}
        <div className="flex w-3/4 bg-base-100 overflow-y-auto p-4">
         <ChatArea />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
