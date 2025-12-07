
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("user"); // check if user is logged in
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
