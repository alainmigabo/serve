import { AxiosError } from "axios";
import { httpService } from "../service/index.js";

export const create = async ({ path, data }) => {
  try {
    const service = httpService(path);
    const { data: response } = await service.create(JSON.parse(data));
    console.log(response);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(JSON.stringify(error.response.data.message));

      return;
    }

    throw error;
  }
};
