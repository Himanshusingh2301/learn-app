import axios from "axios";

const API = axios.create({
  baseURL: "https://learn-app-web.onrender.com/api/",
});

export default API;
