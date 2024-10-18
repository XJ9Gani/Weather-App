import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "https://api.openweathermap.org/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosAPI;
