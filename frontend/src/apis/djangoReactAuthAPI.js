import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

axios.defaults.headers = {
  Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
};

// These axios credentials may or may not be needed:
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true;

export default axios;

// Example of axios instance:
// const baseURL = 'http://127.0.0.1:8000/api';

// const axiosInstance = axios.create({
//     baseURL: baseURL,
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json',
//         accept: 'application/json',
//     },
// });

// export default axiosInstance;

