import axios from "axios";
export const api = axios.create({
  baseURL: "https://feedback-widget-production-e5ea.up.railway.app",
});
