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

  async create(data) {
    const response = await apiClient.post(this.#path, data);

    return response;
  }

  async update(updatedData, id) {
    const response = await apiClient.patch(`${this.#path}/${id}`, updatedData);

    return response;
  }

  async delete(id) {
    const response = await apiClient.delete(`${this.#path}/${id}`);

    return response;
  }
}

export const httpService = (path) => new HttpService(path);
