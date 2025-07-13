import { Routes, Route, Link } from 'react-router';
import SignUp from './pages/signUp';
import LogIn from './pages/logIn';
import Chatbox from './pages/chatbox';
import Start from './pages/start';

function App() {
  return (
    <div>
      {/* <nav className="p-4 bg-base-100 shadow-md flex gap-4 justify-center">
        <Link to="/" className="btn btn-sm">Welcome to chat-if-y</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/user" element={<Chatbox />} />
      </Routes>
    </div>
  );
}

export default App;
