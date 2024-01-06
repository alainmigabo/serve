import { AxiosError } from "axios";
import { httpService } from "../service/index.js";

export const getAll = async ({ path }) => {
  try {
    const service = httpService(path);
    const data = await service.getAll();
    console.log(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(JSON.stringify(error.response.data.message));

      return;
    }

    throw error;
  }
};
