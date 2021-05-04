import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (expectedError) console.log(error);

  return Promise.reject(error);
});

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
