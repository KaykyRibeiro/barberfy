import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom"
export default function NavSimples() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row justify-between items-center m-4">
            <div
                className="text-soft-golden text-lg font-semibold font-Kanit  p-2 w-auto h-10 flex justify-center items-center hover:scale-105 transition-transform duration-500 cursor-pointer "
                onClick={() => navigate("/")}
            >
                <ChevronLeft className="mr-2 w-10 h-10" />
                Voltar
            </div>
            <img src="/barberfy-m-t.png" alt="Logo" className="w-30" />
        </div>
    );
}