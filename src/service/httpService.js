import { apiClient } from "./apiClient.js";

class HttpService {
  #path;
  constructor(path) {
    this.#path = path;
  }

  async getAll() {
    const data = await apiClient.get(this.#path);

    return data;
  }

  async getById(id) {
    const data = await apiClient.get(`${this.#path}/${id}`);

    return data;
  }
}

export const httpService = (path) => new HttpService(path);
