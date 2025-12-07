import React, { useState } from "react";
import { useCaseInstance } from "../../../common/index.js";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // For redirecting after login

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await useCaseInstance.login(username, password);

      // Check if backend returned an error in the response
      if (user.message) {
        throw new Error(user.message);
      }

      console.log("Login Success:", user);

      // Save user session (optional, can use localStorage or context)
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to HomeScreen
      navigate("/home");
    } catch (err) {
      setError(err.message); // Display proper backend message
      console.log("Login Failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            disabled={loading}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            disabled={loading}
            required
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p style={{ marginTop: "20px" }}>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  card: {
    width: "400px",
    padding: "40px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "30px",
    fontSize: "28px",
    color: "#333",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    transition: "0.3s",
  },
  button: {
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2575fc",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },
  error: {
    color: "red",
    fontSize: "14px",
    fontWeight: "500",
    marginTop: "-10px",
  },
};
