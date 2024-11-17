import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";

import { Toaster } from "react-hot-toast";
import Message from "./pages/Message";
import Agendacall from "./pages/Agendacall";
import Admin from "./pages/Admin";

function App() {
  const isAuthenticated = localStorage.getItem("user");
  console.log(isAuthenticated);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        {isAuthenticated ? (
          <Route path="message-logs" element={<Message />} />
        ) : (
          <Route path="home" element={<Home />} />
        )}
        {isAuthenticated ? (
          <Route path="agenda-call" element={<Agendacall />} />
        ) : (
          <Route path="home" element={<Home />} />
        )}
        {isAuthenticated ? (
          <Route path="admin-panel" element={<Admin />} />
        ) : (
          <Route path="home" element={<Home />} />
        )}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
