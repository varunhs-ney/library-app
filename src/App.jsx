import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import IndexPage from "./pages/IndexPage"; // Make sure this file exists

function App() {
  return (
    <Router>
      {/* Top Navigation Bar */}
      <NavBar />

      <div className="flex">
        {/* Sidebar (optional content, no nav links) */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<IndexPage />} />
            <Route path="/upload" element={<UploadPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;