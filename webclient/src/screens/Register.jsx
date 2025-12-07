import React, { useState } from "react";
import { useCaseInstance } from "../../../common/index.js";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const user = await useCaseInstance.register(username, email, password);
      console.log("Register Success:", user);
      setSuccess("Registration successful! You can now login.");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
      console.log("Register Failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <form onSubmit={handleRegister} style={styles.form}>
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          {success && <p style={styles.success}>{success}</p>}
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p style={{ marginTop: "20px" }}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

// styles remain same as before

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
  success: {
    color: "green",
    fontSize: "14px",
    fontWeight: "500",
    marginTop: "-10px",
  },
};
