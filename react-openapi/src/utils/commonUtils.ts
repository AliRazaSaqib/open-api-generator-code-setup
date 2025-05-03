import { Configuration } from "../shared/api/generated";

export const createFrontendApi = (
  token?: string,
  basePath = "https://petstore.swagger.io/v2"
) => {
  const config = new Configuration({
    basePath,
    headers: undefined,
  });

  return config;
};
