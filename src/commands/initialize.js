import { setResource } from "../utils/index.js";

export const initialize = async ({ baseURL }) => {
  return await setResource("baseURL", baseURL);
};
