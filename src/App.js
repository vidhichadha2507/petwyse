import HomePage from "./HomePage";
import Auth from "./HomePage/Authentication/Auth";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./Restaurant/Restaurant";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/restaurant" element={<Restaurant />} />
    </Routes>
  );
}

export default App;
