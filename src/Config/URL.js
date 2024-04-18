import axios from "axios";
import { loadConfig } from "./configLoader";

let api = "";

loadConfig().then((config) => {
  api = axios.create({
    baseURL: config,
  });
});

// axios.interceptors.request.use(
//   function (config) {
//     const token = sessionStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
export {api};
