import { Check } from "lucide-react";
import NavSimples from "../../components/navbar/NavSimples";
import { useNavigate } from "react-router-dom";

export default function Planos() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 min-h-screen bg-charcoal-black">
      <NavSimples />

      <div className="flex flex-col items-center pt-0">
        <h1 className="text-ice-white text-4xl font-Kanit font-bold mb-1">
          Planos
        </h1>

        {/* Container da tabela */}
        <div className="bg-graphite-gray/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
          <table className="table-auto text-left font-Kanit text-ice-white">
            <thead>
              <tr className="bg-charcoal-black/40">
                <th className="px-8 py-6 text-lg font-semibold"></th>
                <th className="px-8 py-6 text-2xl font-bold font-Kanit text-center  text-soft-golden/90 border-l border-gray-600">
                  Básico <span className="text-xl font-Kanit font-semibold ">R$ 49,90</span> 
                </th>
                <th className="px-8 py-6 text-2xl font-bold font-Kanit text-center text-soft-golden/90 border-l border-gray-600">
                  Padrão <span className="text-xl font-Kanit font-semibold ">R$ 79,90</span> 
                </th>
                <th className="px-8 py-6 text-2xl font-bold font-Kanit text-center  text-soft-golden text-shadow-lg/10 text-shadow-ice-white border-l border-gray-600">
                  Premium <span className="text-xl font-Kanit font-semibold ">R$ 99,90</span> 
                </th>
                <th className="px-8 py-6 text-2xl font-bold font-Kanit text-center  text-soft-golden/90 border-l border-gray-600">
                  Empresarial <span className="text-xl font-Kanit font-semibold ">R$ 199,90</span> 
                </th>
              </tr>
            </thead>

            <tbody>
              {/* --- Linha 1 --- */}
              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">Agendamentos</td>

                {[1, 1, 1, 1].map((v, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700"
                  >
                    <Check className="text-soft-golden w-7 h-7" />
                  </td>
                ))}
              </tr>
              

              {/* --- Linha 2 --- */}
              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">Sistema de Fidelização</td>

                {[1, 1, 1, 1].map((v, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700"
                  >
                    <Check className="text-soft-golden w-7 h-7" />
                  </td>
                ))}
              </tr>



              {/* --- Linha 2 --- */}
              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">Gestão de Equipe </td>

                {[0, 1, 1, 1].map((has, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700"
                  >
                    {has ? <Check className="text-soft-golden w-7 h-7" /> : null}
                  </td>
                ))}
              </tr>

              {/* --- Linha 3 --- */}
              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">
                  Tela de Agendamento Personalizada
                </td>

                {[0, 1, 1, 1].map((has, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700"
                  >
                    {has ? <Check className="text-soft-golden w-7 h-7" /> : null}
                  </td>
                ))}
              </tr>

              {/* --- Linha 4 --- */}

              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">Dashboards Avançados</td>

                {[0, 0, 1, 1].map((has, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700"
                  >
                    {has ? <Check className="text-soft-golden w-7 h-7" /> : null}
                  </td>
                ))}
              </tr>

              {/* --- Linha 5 --- */}
              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">Assistente no WhatsApp</td>

                {[0, 0, 1, 1].map((has, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700 "
                  >
                    {has ? <Check className="text-soft-golden w-7 h-7" /> : null}
                  </td>
                ))}
              </tr>

              {/* --- Linha 6 --- */}
              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">Pagamentos Online</td>

                {[0, 0, 1, 1].map((has, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700 "
                  >
                    {has ? <Check className="text-soft-golden w-7 h-7" /> : null}
                  </td>
                ))}
              </tr>

              {/* --- Linha 7 --- */}
              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">Gestão de Estoques</td>

                {[0, 0, 1, 1].map((has, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700 "
                  >
                    {has ? <Check className="text-soft-golden w-7 h-7" /> : null}
                  </td>
                ))}
              </tr>

              {/* --- Linha 7 --- */}
              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">Multiplas barbearias</td>

                {[0, 0, 0, 1].map((has, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700 "
                  >
                    {has ? <Check className="text-soft-golden w-7 h-7" /> : null}
                  </td>
                ))}
              </tr>

              {/* --- Linha 8 --- */}
              <tr className="border-t border-gray-700">
                <td className="px-8 py-5 font-medium">Assitente IA</td>

                {[0, 0, 0, 1].map((has, i) => (
                  <td
                    key={i}
                    className="px-8 py-5 border-l border-gray-700 "
                  >
                    {has ? <Check className="text-soft-golden w-7 h-7" /> : null}
                  </td>
                ))}
              </tr>
              <tr className="border border-gray-700">
                <td className="px-8 py-5 border-l border-gray-700 ">
                  
                </td>
                <td className="px-8 py-5 border-l border-gray-700 ">
                  <button 
                    className=" bg-soft-golden text-charcoal-black font-Kanit font-bold px-10 py-4 rounded-lg hover:scale-105 transition"
                    onClick={() => navigate("/cadastro?plan=basico")}
                  >
                    Escolher plano
                  </button>
                </td>
                <td className="px-8 py-5 border-l border-gray-700 ">
                  <button className=" bg-soft-golden/50 text-charcoal-black font-Kanit font-bold px-10 py-4 rounded-lg ">
                    Indisponivel
                  </button>
                </td>
                <td className="px-8 py-5 border-l border-gray-700 ">
                  <button className=" bg-soft-golden/50 text-charcoal-black font-Kanit font-bold px-10 py-4 rounded-lg ">
                    Indisponivel
                  </button>
                </td>
                <td className="px-8 py-5 border-l border-gray-700 ">
                  <button className=" bg-soft-golden/50 text-charcoal-black font-Kanit font-bold px-10 py-4 rounded-lg ">
                    Indisponivel
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
