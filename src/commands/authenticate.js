import { setResource } from "../utils/setResource.js";
import { apiClient } from "../service/apiClient.js";

export const authenticate = async ({ credentials }) => {
  const {
    data: { token },
  } = await apiClient.post("auth", JSON.parse(credentials));

  await setResource("token", token);
};
