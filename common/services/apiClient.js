// common/services/apiClient.js
export const apiClient = async (endpoint, method = "POST", body = null) => {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null,
    });

    let data = {};
    try {
      data = await response.json(); // parse JSON response
    } catch {
      data = {}; // ignore parse errors
    }

    if (!response.ok) {
      // If backend provides a message, use it
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return data;
  } catch (err) {
    throw new Error(err.message || "Network error");
  }
};
