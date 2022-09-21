import axios from "axios";

const BASE_URL = "/api";

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});
