import { AxiosError } from "axios";
import { httpService } from "../service/index.js";

export const remove = async ({ path, id }) => {
  try {
    const service = httpService(path);
    const response = await service.delete(id);
    console.log(response);
    console.log("Deleted successfully!");
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(JSON.stringify(error.response.data.message));

      return;
    }

    throw error;
  }
};
