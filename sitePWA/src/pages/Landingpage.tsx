export default function Landingpage() {
 return (
   <div>
    <h1 className="text-ice-white">Landingpage</h1>
    <button onClick={() => window.location.href = '/login'}>Login</button>
    <button onClick={() => window.location.href = '/cadastrobs'}>CadastroBS</button>
   </div>
 );
}