import axios from "axios";

axios.defaults.baseURL = "https://hacker-news.firebaseio.com/v0";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (expectedError) console.log(error);

  return Promise.reject(error);
});

export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  patch: axios.patch,
};
