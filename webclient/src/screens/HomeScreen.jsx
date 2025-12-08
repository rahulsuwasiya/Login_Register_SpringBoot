import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";

export default function HomeScreen() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session if you store it (localStorage/sessionStorage)
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Home!</h1>
      <UserInfo/>
      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "20px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#2575fc",
    color: "#fff",
    fontWeight: "600",
  },
};
