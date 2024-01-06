import { httpService } from "../service/index.js";

export const getAll = async ({ path }) => {
  const service = httpService(path);
  const data = await service.getAll();
  console.log(data);
};
