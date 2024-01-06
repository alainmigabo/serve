import { getResources } from "../utils/index.js";
import axios from "axios";

const { baseURL, token } = await getResources();

export const apiClient = axios.create({ baseURL });

apiClient.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);
