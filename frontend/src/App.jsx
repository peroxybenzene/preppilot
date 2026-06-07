import Roadmap from "./pages/Roadmap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Goals from "./pages/Goals";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

<Route
  path="/roadmap"
  element={<Roadmap />}
/>

export default App;