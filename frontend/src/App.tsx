import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Settings from "./components/Setting"
import Profile from "./components/Profile"

import { Routes, Route } from "react-router"


function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
