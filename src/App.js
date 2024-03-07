import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Status } from "./components/Pages/Status";
import Commands from "./components/Pages/Commands";
import { Dashboard } from "./components/Pages/DashboardPage";
import Profile from './components/Pages/Profile';
import Footer from "./components/Footer";
import NotFoundPage from './components/Pages/NotFoundPage';
import { Login } from './components/Pages/Login'

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/status" element={<Status />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/profile" element={<Profile />}/>
            />
            {/* Ruta para manejar el error 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;