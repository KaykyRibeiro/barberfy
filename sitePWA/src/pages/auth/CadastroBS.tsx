import { useEffect, useState } from "react";
import { registerBarbershop } from "../../services/barbershopService";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { uploadBarbershopLogo } from "../../services/uploadService";
import CropModal from "../../components/crop/CropModal";

const CreateUserSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório").min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().nonempty("O email é obrigatório").email("Formato de email inválido"),
  phone: z.string().nonempty("O telefone é obrigatório").min(11, "O telefone deve ter no mínimo 11 caracteres"),
  address: z.string().nonempty("O endereço é obrigatório"),
  instagram: z.string().optional(),
  facebook: z.string().optional(),
  logo: z
    .custom<FileList>((v) => v instanceof FileList, "Arquivo inválido")
    .transform((list) => list?.item(0) || null).refine((file) => file!.size <= 5 * 1024 * 1024, "Tamanho do arquivo excedido (5MB)"),
  password: z.string().nonempty("A senha é obrigatória").min(6),
  confirmPassword: z.string().nonempty("A senha é obrigatória").min(6)
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "As senhas devem ser iguais"
});


type CreateUserFormData = z.infer<typeof CreateUserSchema>;

export default function CadastroBS() {
  const navigate = useNavigate();


  const { register, handleSubmit, setValue, formState: { errors } } =
    useForm<CreateUserFormData>({ resolver: zodResolver(CreateUserSchema) as any });

  const [loading, setLoading] = useState(false);

  const [preview, setPreview] = useState<string | null>(null);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [tempImage, setTempImage] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
      if (tempImage) URL.revokeObjectURL(tempImage);
    };
  }, [preview, tempImage]);

  async function handleRegister(data: CreateUserFormData) {
    try {
      setLoading(true);
      const { logo, confirmPassword, ...payload } = data;
      const response = await registerBarbershop(payload);
      const barbershopId = response.id;
      if (logo) {
        await uploadBarbershopLogo(barbershopId, logo);
      }
      // 3. Redireciona para login
      navigate("/login");
    } catch (err: any) {
      console.error("Erro ao cadastrar barbearia:", err.response?.data || err.message);
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

        <div>
          <label>Logo da Barbearia (JPG ou PNG):</label>
          {preview && (
            <div className="flex flex-col gap-3 my-2">
              <div className="flex flex-row items-end gap-5">
                <img
                  src={preview}
                  alt="Pré-visualização"
                  className="w-62 h-32 object-cover rounded-none border"
                />
                <img
                  src={preview}
                  alt="Pré-visualização"
                  className="w-22 h-22 object-cover rounded-none border"
                />
                <img
                  src={preview}
                  alt="Pré-visualização"
                  className="w-22 h-22 object-cover rounded-full border"
                />
              </div>
            </div>
          )}
        </div>
        <input
          type="file"
          placeholder="Logo"
          {...register("logo")}
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const url = URL.createObjectURL(file);
              setTempImage(url);
              setCropModalOpen(true);
            }
          }}
        />
        {errors.logo && <p style={{ color: "red" }}>{errors.logo.message}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>

      {cropModalOpen && tempImage && (
        <CropModal
          image={tempImage}
          onClose={() => setCropModalOpen(false)}
          onCropComplete={(file) => {
            setValue("logo", file as any); // react-hook-form aceita
            setPreview(URL.createObjectURL(file)); // preview cortado
          }}
        />
      )}
    </div>
  );
}

