import { setResource } from "../utils/setResource.js";
import { apiClient } from "../service/apiClient.js";
import { AxiosError } from "axios";

export const authenticate = async ({ credentials }) => {
  try {
    const {
      data: { token },
    } = await apiClient.post("auth", JSON.parse(credentials));

    await setResource("token", token);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(JSON.stringify(error.response.data.message));

      return;
    }

    throw error;
  }
};
