import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "",

  // deployed version of amazon server on render.com
  baseURL: "http://localhost:5000/api",
});

export { axiosInstance };
