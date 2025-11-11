import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PWABadge from "../PWABadge";

const Login = lazy(() => import("../pages/auth/login"));
const Cadastro = lazy(() => import("../pages/auth/cadastro"));
const Verificacao = lazy(() => import("../pages/auth/Verificacao"));
const Termos = lazy(() => import("../pages/Termos"));
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
                    <Route path="/" element={<PWABadge />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/verificacao" element={<Verificacao />} />
                    <Route path="/termos" element={<Termos />} />
                </Routes>
            </Suspense>
        </div>
    );
}