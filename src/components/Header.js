import HeroSection from "./HeroSection";
import NavBar from "./navigation/NavBar";

function Header() {
    return (
      <header className="text-zinc-200">
        <NavBar/>
        <HeroSection/>
      </header>
    );
}

export default Header;