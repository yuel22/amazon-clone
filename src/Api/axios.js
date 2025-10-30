import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "",

  // deployed version of amazon server on render.com
  baseURL: "https://amazon-clone-api-bvql.onrender.com",
});

export { axiosInstance };
