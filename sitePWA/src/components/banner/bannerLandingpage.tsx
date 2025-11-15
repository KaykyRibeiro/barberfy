import { useNavigate } from "react-router-dom";

export default function BannerLandingpage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center px-10 py-20 bg-linear-to-r from-charcoal-black via-graphite-gray/90 to-charcoal-black ">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start gap-5 text-left lg:w-1/2">
        <h1 className="text-5xl font-Kanit font-bold text-ice-white leading-tight">
          Agendamentos automáticos,
          <span className="text-soft-golden block">sem complicação.</span>
        </h1>

        <p className="text-lg text-soft-golden/90 font-Kanit max-w-md">
          Seu novo sistema de agendamento online, simples e rápido.
          O cliente marca, você corta.
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <span className="text-sm font-Kanit text-soft-golden/70">
            Apenas para os 100 primeiros clientes!
          </span>
          <button
            onClick={() => navigate("/planos")}
            className="bg-soft-golden text-charcoal-black font-Kanit font-semibold text-lg px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-linear-to-r hover:from-soft-golden hover:to-leather-brown"
          >
            TESTE GRÁTIS DE 30 DIAS
          </button>
        </div>
      </div>

      {/* Logo Section */}
      <div className="w-1/2 flex justify-center items-end  lg:mt-0">
        <img
          src="/barberfy-512x512.png"
          alt="Logo Barberfy"
          className="w-72 drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05),transparent_70%)]"></div>

            {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-b from-transparent to-charcoal-black pointer-events-none"></div>
    </div>
  );
}
