import { useState } from "react";
import { registerBarbershop } from "../../services/barbershopService";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const CreateUserSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório").min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().nonempty("O email é obrigatório").email("Formato de email inválido"),
  phone: z.string().nonempty("O telefone é obrigatório").min(11, "O telefone deve ter no mínimo 11 caracteres"),
  address: z.string().nonempty("O endereço é obrigatório").min(1, "O endereço é obrigatório"),
  instagram: z.string().optional(),
  facebook: z.string().optional(),
  logo: z.string().optional(),
  password: z.string().nonempty("A senha é obrigatória").min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmPassword: z.string().nonempty("A senha é obrigatória").min(6, "A senha deve ter no mínimo 6 caracteres")
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "As senhas devem ser iguais"
});

type CreateUserFormData = z.infer<typeof CreateUserSchema>;

export default function CadastroBS() {
  const navigate = useNavigate();
  const [isFinilized, setIsFinilized] = useState(false);
  const { register, handleSubmit, formState: { errors } } =
    useForm<CreateUserFormData>({ resolver: zodResolver(CreateUserSchema) });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister(data: CreateUserFormData) {
    try {
      setLoading(true);
      setError("");
      setIsFinilized(true);


      // Remove o confirmPassword
      const { confirmPassword, ...payload } = data;

      const response = await registerBarbershop(payload);

      console.log("Barbearia cadastrada:", response);

    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao cadastrar barbearia");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-3">

        <input placeholder="Nome da Barbearia" {...register("name")} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <input placeholder="Email" {...register("email")} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <input placeholder="Telefone" {...register("phone")} />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}

        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

        <input type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} />
        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}

        <input placeholder="Endereço" {...register("address")} />
        {errors.address && <p style={{ color: "red" }}>{errors.address.message}</p>}

        <input placeholder="Instagram" {...register("instagram")} />
        {errors.instagram && <p style={{ color: "red" }}>{errors.instagram.message}</p>}

        <input placeholder="Facebook" {...register("facebook")} />
        {errors.facebook && <p style={{ color: "red" }}>{errors.facebook.message}</p>}

        <input placeholder="Logo" {...register("logo")} />
        {errors.logo && <p style={{ color: "red" }}>{errors.logo.message}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {isFinilized &&
          <div>
            <h1>Cadastro realizado com sucesso</h1>
            <p>Vá para a tela de login e conecte-se</p>
            <button onClick={() => navigate("/login")}>Conectar-se</button>
          </div>
        }
      </form>
    </div>
  );
}
