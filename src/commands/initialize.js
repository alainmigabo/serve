import { setResource } from "../utils/index.js";

export const initialize = async ({ baseURL }) => {
  await setResource("baseURL", baseURL);
  console.log("Initialized successfully!");
};
