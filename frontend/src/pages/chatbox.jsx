import ChatArea from "../components/ChatArea";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";

const Chatbox = () => {
  const [curruser, setCurruser] = useState({});
  const [myid, setMyId] = useState({});
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    const currUser = async () => {
      try {
        const response = await axiosInstance.get('/home');
        setMyId(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    currUser();
  }, []);
  return (

    <div data-theme='forest' className="min-h-screen flex flex-col bg-base-200">
      {/* Top Nav */}
      <NavBar />
      <h1>{myid.name}</h1>

      {/* Chat Body */}
      <div className="flex border-t-2  overflow-hidden h-[890px]">
        {/* Sidebar - Contacts */}
        <div className="w-1/4 bg-base-100 shadow-md overflow-y-auto p-4 border-r-2">
          <div className="border-r overflow-y-auto">
            {users.map((c) => (
              <div className="p-4 border-b-2 cursor-pointer" onClick={() => setCurruser(c)} key={c._id}>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm">{c.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex w-3/4 bg-base-100 overflow-y-auto">
          <ChatArea person={curruser} myId={myid} />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
