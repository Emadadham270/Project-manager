import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change if your backend runs elsewhere
});

// Add JWT token to requests if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
