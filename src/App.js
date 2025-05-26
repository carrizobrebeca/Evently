import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Landing from "./Components/Views/Landing";
import Home from "./Components/Views/Home";
import Profile from "./Components/Pages/Profile";
import Login from "./Components/Pages/Login";
import Event from "./Components/Pages/Event";
import PostMax from "./Components/Pages/PostMax";
import HomeCopy from "./Components/Views/HomeCopy";
import SendMessage from "./Components/Pages/SendMessage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event" element={<Event />} />
         <Route path="/postmax" element={<PostMax />} />
         <Route path="/prueba" element={<HomeCopy />} />
         <Route path="/sendmessage" element={<SendMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
