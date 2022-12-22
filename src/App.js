import "./App.css";
import {
  BrowserRouter as Router,
  Navigate, //replaces "Switch" used till v5
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./components/landingPage.jsx";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
