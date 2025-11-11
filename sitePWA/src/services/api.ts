import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // ou seu endpoint
});

// Exemplo de endpoint:
export const getBarbers = async (token: string) => {
  const response = await api.get("/barbers", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
