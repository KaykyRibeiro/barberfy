import { api } from "./api";

export async function uploadBarbershopLogo(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/upload/barbershops/logo", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  return response.data; // retorna { url }
}
