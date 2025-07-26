import { Routes, Route } from 'react-router';
import SignUp from './pages/auth';
import Chatbox from './pages/chatbox';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/user" element={<Chatbox />} />
      </Routes>
    </div>
  );
}

export default App;
