import { AxiosError } from "axios";
import { httpService } from "../service/index.js";

export const update = async ({ path, id, data }) => {
  try {
    const service = httpService(path);
    const { data: response } = await service.update(JSON.parse(data), id);
    console.log(response);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(JSON.stringify(error.response.data.message));

      return;
    }

    throw error;
  }
};
