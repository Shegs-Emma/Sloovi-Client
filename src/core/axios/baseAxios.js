import axios from "axios";
// require("dotenv").config();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

console.log("here", process.env.REACT_APP_SERVER_URL);

export default axiosInstance;
