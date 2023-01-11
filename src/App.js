import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/landingPage.jsx";
import Home from "./components/pages/Home";
import GraSubmission from "./components/pages/graSubmission";
import GraBulkRequest from "./components/pages/graBulkRequest";
import GraNewRequest from "./components/pages/graNewRequest";
import GraSubmittedRequest from "./components/pages/graAllRequest";
import GraAllRequest from "./components/pages/graAllRequest"
import GraTinStatus from "./components/pages/graTinStatus"
import GraSimulation from "./components/pages/graSimulation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/grasubmission" element={<GraSubmission />} />
        <Route path="/grabulkrequest" element={<GraBulkRequest />} />
        <Route path="/granewrequest" element={<GraNewRequest />} />
        <Route path="/grasubmittedrequests" element={<GraSubmittedRequest />} />
        <Route path="/graallrequests" element={<GraAllRequest />} />
        <Route path="/gratinstatus" element={<GraTinStatus />} />
        <Route path="/grasimulation" element={<GraSimulation />} />
      </Routes>
    </Router>
  );
}

export default App;
