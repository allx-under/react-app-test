import axios from "axios";

const instance = axios.create({
  baseURL: "https://631cde274fa7d3264cb85f44.mockapi.io/api/",
});

export const getAllItems = async () => {
  const response = await instance.get(`/items`);
  return response;
};

export const addItem = async (item) => {
  const { data } = await instance.post("/items", item);
  return data;
};

export const removeItem = async (id) => {
  const { data } = await instance.delete(`/items/${id}`);
  return data;
};
