import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const CreateBabershopSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório").min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: z.string().nonempty("O email é obrigatório").email("Formato de email inválido"),
    phone: z.string().nonempty("O telefone é obrigatório").min(11, "O telefone deve ter no mínimo 11 caracteres"),
    address: z.string().nonempty("O endereço é obrigatório"),
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    password: z.string().nonempty("A senha é obrigatória").min(6),
    confirmPassword: z.string().nonempty("A senha é obrigatória").min(6)
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas devem ser iguais"
})

type CreateBarbershopFormData = z.infer<typeof CreateBabershopSchema>;
export default function FormInfoBS({ onDone }: { onDone: (data: any) => void }) {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<CreateBarbershopFormData>({ resolver: zodResolver(CreateBabershopSchema) as any });


    async function handleRegister(data: CreateBarbershopFormData) {
        try {
            setLoading(true);
            const { confirmPassword, ...payload } = data;
            onDone(payload);
            console.log(payload);
        } catch (err: any) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
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
                <button type="submit" disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>

            </form>
        </div>
    );
}