import HomePage from "./HomePage";
import Auth from "./HomePage/Authentication/Auth";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
