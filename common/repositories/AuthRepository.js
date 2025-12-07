// common/repositories/AuthRepository.js
import { apiClient } from "../services/apiClient.js";

const BASE_URL = "http://localhost:8081/api/auth";

export class AuthRepository {
  async login(username, password) {
    const data = await apiClient(`${BASE_URL}/login`, "POST", { username, password });

    // Check for backend error messages
    if (data.message) {
      throw new Error(data.message); // This will be caught in UseCase/Login.jsx
    }

    return data; // successful login
  }

  async register(username, email, password) {
    const data = await apiClient(`${BASE_URL}/register`, "POST", { username, email, password });

    if (data.message) {
      throw new Error(data.message);
    }

    return data;
  }
}
