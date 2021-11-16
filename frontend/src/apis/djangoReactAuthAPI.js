import axios from "axios";

// For everthing besides authentication for now
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

axios.defaults.headers = {
  Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
};

export default axios;
