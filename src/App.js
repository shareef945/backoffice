import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/landingPage.jsx";
import Home from "./components/pages/Home";
import GraSubmission from "./components/pages/graSubmission";
import GraBulkRequest from "./components/pages/graBulkRequest";
import GraNewRequest from "./components/pages/graNewRequest";
import GraSubmittedRequest from "./components/pages/graSubmittedRequest";
import GraAllRequest from "./components/pages/graAllRequest";
import GraTinStatus from "./components/pages/graTinStatus";
import GraSimulation from "./components/pages/graSimulation";
import Navbar from "./components/utils/Nav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/gra/submission" element={<GraSubmission />} /> */}
        <Route
          path="/gra/submission"
          element={
            <Navbar component=<GraSubmission /> header="GRA Submission" />
          }
        />
        <Route
          path="/gra/bulkrequests"
          element={
            <Navbar component=<GraBulkRequest /> header="GRA Bulk Requests" />
          }
        />
        <Route
          path="/gra/newrequest"
          element={
            <Navbar component=<GraNewRequest /> header="Submit New Request" />
          }
        />
        <Route
          path="/gra/submittedrequests"
          element={
            <Navbar
              component=<GraSubmittedRequest />
              header="View Submitted Requests"
            />
          }
        />
        <Route
          path="/gra/allrequests"
          element={
            <Navbar component=<GraAllRequest /> header="View All Requests" />
          }
        />
        <Route
          path="/gra/tinstatus"
          element={<Navbar component=<GraTinStatus /> header="TIN Status" />}
        />
        <Route
          path="/gra/simulation"
          element={
            <Navbar component=<GraSimulation /> header="GRA Simluation" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
