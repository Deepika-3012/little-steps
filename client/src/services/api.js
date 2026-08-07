import axios from "axios";

const API = axios.create({
 baseURL: "https://little-steps-server.onrender.com/api",
});

export default API;