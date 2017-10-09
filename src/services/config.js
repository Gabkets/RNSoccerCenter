import axios from "axios";

const accessToken = "a08d57bc4b0f426dabf628db623b4598";

const axInstance = axios.create({
  baseURL: "https://api.football-data.org/v1",
  headers: {
    "X-Auth-Token": accessToken,
    "Content-Type": "application/json"
  }
});

export default axInstance;
