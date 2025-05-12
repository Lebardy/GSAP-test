import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Developer from "./Developer"; // Import the component for your developer page
import Homepage from "./Homepage"; // Import the HomePage component
import Photography from "./Photography"; // Import the Photography component
import About from "./About";
// Import the Student component

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Route for the homepage */}
        <Route path="/developer" element={<Developer />} /> {/* Route for the developer page */}
        <Route path="/photography" element={<Photography />} /> {/* Route for the photography page */}
        <Route path="/about" element={<About />} /> {/* Route for the about page */}
      </Routes>
    </div>
  );
}

export default App;
