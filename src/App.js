import HomePage from "./HomePage";
import Auth from "./HomePage/Authentication/Auth";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./Restaurant/Restaurant";
import User from "./User/User";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
