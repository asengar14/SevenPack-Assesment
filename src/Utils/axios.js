import axios from "axios";

const axiosBaseRequest = axios.create({
  baseURL: " https://content.guardianapis.com/",
  responseType: "json",
});

export default axiosBaseRequest;
