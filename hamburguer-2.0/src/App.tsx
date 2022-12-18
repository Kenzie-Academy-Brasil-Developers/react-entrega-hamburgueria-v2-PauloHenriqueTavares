import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/landing";
import { LoginPage } from "./pages/loginPage/login";
import { RegisterPage } from "./pages/registerPage/register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
