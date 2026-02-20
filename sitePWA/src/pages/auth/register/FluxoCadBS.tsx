import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInfoBS from "../../../components/formCadBS/FormInfoBS";
import FormUploadBS from "../../../components/formCadBS/FormUploadBS";
import { registerBarbershop } from "../../../services/barbershopService";
import { uploadBarbershopLogo } from "../../../services/uploadService";

export default function FluxoCadBS() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleFinishCadastro(logoFile: File) {
    try {
      setLoading(true);

      // 1️⃣ cria barbearia
      const barbershop = await registerBarbershop(formData);
      const bsid  = localStorage.getItem("barbershop") ? JSON.parse(localStorage.getItem("barbershop")!) : {};
      if (!bsid.id) {
        throw new Error("ID da barbearia não retornado");
      }
      
      // 2️⃣ upload da logo
      await uploadBarbershopLogo(bsid.id, logoFile);

      // 3️⃣ navega
      navigate("/home");
    } catch (err) {
      console.error("Erro no fluxo de cadastro:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {step === 1 && (
        <FormInfoBS
          onDone={(data) => {
            setFormData(data);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <FormUploadBS
          loading={loading}
          onDone={handleFinishCadastro}
        />
      )}
    </>
  );
}
