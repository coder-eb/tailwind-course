import logo from "../assets/images/logo-inverted.png";
import MenuItem from "./MenuItem";

function LogoSection() {
  return (
    <div className="flex items-center gap-2 p-2">
      <img src={logo} width="50" />
      <div className="text-2xl font-bold">
        tw:<span className="text-sky-900">mf</span>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <div className="hidden flex-1 items-center justify-end md:flex">
      <MenuItem name="Home" />
      <MenuItem name="Lineup" />
      <MenuItem
        name="Tickets"
        subMenuItems={["Single Day Ticket", "7 Day Ticket"]}
      />
      <MenuItem name="Support" />
    </div>
  );
}

window.onload = () => {
  const mobileMenuIcon = document.getElementById("mobile-menu-button");
  mobileMenuIcon.addEventListener("click", () => {
    if (mobileMenuIcon.classList.contains("open")) {
      mobileMenuIcon.classList.remove("open");
    } else {
      mobileMenuIcon.classList.add("open");
    }
  });
};
function HamburgerIcon() {
  return (
    <div id="mobile-menu-button" className="group">
      <div className="relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:top-2 group-open:rotate-45"></div>
      <div className="mt-1 h-1 w-8 rounded-full bg-zinc-200 opacity-100 group-open:opacity-0"></div>
      <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:-top-2 group-open:-rotate-45"></div>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
      <HamburgerIcon />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
      <LogoSection />
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}

export default NavBar;
