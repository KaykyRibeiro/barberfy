import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function StepPage() {
    const [step, setStep] = useState<number | null>(null);
    const barbershopId = localStorage.getItem("barbershop_id");
    const navigator = useNavigate();

    useEffect(() => {
        async function load() {
            const { data } = await api.get(`/steps/${barbershopId}`);

            if (!data.step1) return setStep(1);
            if (!data.step2) return setStep(2);
            if (!data.step3) return setStep(3);
            if (!data.finalized) return setStep(4);

            // tudo finalizado → dashboard
            navigator("/dashboard");
        }

        load();
    }, []);

    if (!step) return <div>Carregando...</div>;

    return (
        <>
            {step === 1 && <Step1 onDone={() => setStep(2)} />}
            {step === 2 && <Step2 onDone={() => setStep(3)} />}
            {step === 3 && <Step3 onDone={() => setStep(4)} />}
            {step === 4 && <FinalStep onDone={() => navigate("/dashboard")} />}
        </>
    );
}
