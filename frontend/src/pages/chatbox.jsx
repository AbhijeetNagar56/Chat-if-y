import ChatArea from "../components/ChatArea";
import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import axiosInstance from "../api/axios";




const Chatbox = () => {
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
    <div data-theme='forest' className="min-h-screen flex flex-col bg-base-200">
      {/* Top Nav */}
      <NavBar />

      {/* Chat Body */}
      <div className="flex border-t-2  overflow-hidden h-[890px]">
        {/* Sidebar - Contacts */}
        <div className="w-1/4 bg-base-100 shadow-md overflow-y-auto p-4 border-r-2">
          <Sidebar />
        </div>

        {/* Main Chat Area */}
        <div className="flex w-3/4 bg-base-100 overflow-y-auto">
          <ChatArea name={"John"} status={"online"} />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
