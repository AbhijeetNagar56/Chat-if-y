
import NavBar from '../components/navBar';
import Inbox from '../components/inbox';
import Contact from '../components/contact';

const Chatbox = () => {
  return (
    <div data-theme="forest" className="min-h-screen flex flex-col bg-base-200">
      {/* Top Nav */}
      <NavBar />

      {/* Chat Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Contacts */}
        <div className="w-1/4 bg-base-100 shadow-md overflow-y-auto p-4">
          <Contact />
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 bg-base-100 overflow-y-auto p-4">
          <Inbox />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
