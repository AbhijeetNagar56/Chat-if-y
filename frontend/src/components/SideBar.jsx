import { useState, useEffect } from 'react';


import ContactItem from './ContactItem';
import axiosInstance from "../api/axios";



export default function Sidebar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/');
        setUsers(response.data); // ✅ Store response in state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);



  return (
    <div className="border-r overflow-y-auto">
      {users.map((c) => (
        <ContactItem key={c._id} name={c.name} lastMessage={c.email} />
      ))}
    </div>
  );
}
