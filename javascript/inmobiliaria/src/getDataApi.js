import { DATA_URL } from "./constants";

async function getDataApi() {
  const response = await fetch(DATA_URL);
  const data = await response.json();
  return data;
}

export default getDataApi;
