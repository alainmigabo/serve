import fs from "fs/promises";
import { getResources } from "./getResources.js";

const RESOURCES_PATH = new URL("../../resources.json", import.meta.url)
  .pathname;

export const setResource = async (resourceKey, value) => {
  const resources = await getResources();
  resources[resourceKey] = value;
  await fs.writeFile(RESOURCES_PATH, JSON.stringify(resources, null, 2));
};
