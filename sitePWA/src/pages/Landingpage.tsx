import BannerLandingpage from "../components/banner/bannerLandingpage";
import NavLandingpage from "../components/navbar/NavLandingpage";

export default function Landingpage() {
 return (
   <div className="flex-1">
      <div>
        <NavLandingpage />
        <BannerLandingpage />
      </div>
   </div>
 );
}