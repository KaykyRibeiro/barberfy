import { lazy, Suspense  } from "react";
import { Routes, Route } from "react-router-dom";
import PWABadge from "../PWABadge";


const Login = lazy(() => import("../pages/auth/Login"));
const CadastroBS = lazy(() => import("../pages/auth/CadastroBS"));
const Verificacao = lazy(() => import("../pages/auth/Verificacao"));
const Termos = lazy(() => import("../pages/Termos"));
const Landingpage = lazy(() => import("../pages/Landingpage"));
const Planos = lazy(() => import("../pages/auth/Planos"));

function Loader() {
    return (
        <div className="flex items-center justify-center h-screen text-soft-golden">
            <span className="animate-pulse text-xl font-semibold">Carregando...</span>
        </div>
    );
}

export default function AppRoutes() {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastrobs" element={<CadastroBS />} />
                    <Route path="/verificacao" element={<Verificacao />} />
                    <Route path="/termos" element={<Termos />} />
                    <Route path="/planos" element={<Planos />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </Suspense>
            <PWABadge />
        </div>
    );
}