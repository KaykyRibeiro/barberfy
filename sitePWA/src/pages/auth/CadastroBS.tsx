import React, { useState } from "react";
import { registerBarbershop } from "../../services/barbershopService";

export default function CadastroBS() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    logo: "",
    address: "",
    instagram: "",
    facebook: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await registerBarbershop(form);
      console.log("✅ Barbearia cadastrada:", data);
      alert("Cadastro realizado com sucesso!");
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao cadastrar barbearia");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefone" />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Senha" />

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
