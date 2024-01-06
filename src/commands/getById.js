import { httpService } from "../service/index.js";

export const getById = async ({ path, id }) => {
  const service = httpService(path);
  const { data } = await service.getById(id);
  console.log(data);
};
