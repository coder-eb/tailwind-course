import logo from "../../assets/images/logo-inverted.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function LogoSection() {
  return (
    <div className="flex items-center gap-2 p-2">
      <img src={logo} alt="headphone-logo" width="50" />
      <div className="text-2xl font-bold">
        tw:<span className="text-sky-900">mf</span>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="sticky top-0 z-10 flex bg-gradient-to-r from-rose-500 to-pink-500">
      <LogoSection />
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}

export default NavBar;
