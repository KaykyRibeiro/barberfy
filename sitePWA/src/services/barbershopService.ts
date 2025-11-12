import { api } from "./api";

export async function registerBarbershop(data: any) {
  try {
    const response = await api.post("/barbershops", data);
    return response.data;
  } catch (error: any) {
    console.error("Erro no cadastro da barbearia:", error.response?.data || error.message);
    throw error;
  }
}

export async function getBarbershops() {
  try {
    const response = await api.get("/barbershops");
    return response.data;
  } catch (error: any) {
    console.error("Erro ao buscar barbearias:", error.response?.data || error.message);
    throw error;
  }
}