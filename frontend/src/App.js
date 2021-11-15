import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Login from "./components/views/auth/Login";
import Signup from "./components/views/auth/Signup";
import Logout from "./components/views/auth/Logout";
import Dashboard from "./components/app/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login/>} exact />
          <Route path="/signup" element={<Signup/>} exact />
          <Route path="/logout" element={<Logout/>} exact />
          <Route path="/dashboard" element={<Dashboard/>} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
