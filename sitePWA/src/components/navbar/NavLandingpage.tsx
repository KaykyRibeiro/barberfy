import { useNavigate } from "react-router-dom";
export default function NavLandingpage() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row justify-between items-center h-20  mx-5 bg-linear-to-r from-charcoal-black via-graphite-gray/90 to-charcoal-black">
            <img src="/barberfy-m-t.png" alt="" className="h-20" />
            <button 
                className="text-soft-golden text-lg font-semibold font-Kanit border-2 border-soft-golden rounded-md p-2 w-20 h-10 flex justify-center items-center hover:bg-soft-golden hover:text-charcoal-black"
                type="button"
                onClick={() => navigate("/login")}
            >Login</button>
        </div>
    );
}