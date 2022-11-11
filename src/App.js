import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import LoginSytem from './LoginSystem'
function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route exact path="/" element={<LoginSytem />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
