import {
  
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import ProjectDetails from "../pages/ProjectDetails";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PORTFOLIO */}
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        {/* PROJECT DETAILS */}
        <Route
          path="/portfolio/:slug"
          element={<ProjectDetails />}
        />

        {/* OTHER PAGES */}
        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/resume"
          element={<Resume />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
  );
}

export default AppRoutes;