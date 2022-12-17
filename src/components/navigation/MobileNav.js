import { useState } from "react";

function HamburgerIcon({mobileMenuVisibility, handleMobileMenuVisibility}) {
  return (
    <div id="mobile-menu-button" className={"group peer " + (mobileMenuVisibility ? "open" : "")} onClick={handleMobileMenuVisibility}>
      <div className="relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:top-2 group-open:rotate-45"></div>
      <div className="mt-1 h-1 w-8 rounded-full bg-zinc-200 opacity-100 group-open:opacity-0"></div>
      <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:-top-2 group-open:-rotate-45"></div>
    </div>
  );
}

function SubMenuItem({ itemName }) {
  return (
    <div className="relative p-4 text-center text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
      <span>{itemName}</span>
    </div>
  );
}

function SubMenu({ items }) {
  if (items.length > 0) {
    const subMenu = items.map((item) => <SubMenuItem itemName={item} />);
    return <div className="hidden group-open:block">{subMenu}</div>;
  }
  return <></>;
}

function MenuItem({ name, subMenuItems = [] }) {

  const [ isSubMenuVisible, setIsSubMenuVisible ] = useState(false);
  function openRCloseSubMenu() {
    const subMenuVisibility = isSubMenuVisible ? false : true;
    setIsSubMenuVisible(subMenuVisibility);
  }

  return (
    <div className={"group relative h-full cursor-pointer text-pink-200 transition-colors hover:bg-white/10 hover:text-zinc-200 " + (isSubMenuVisible ? "open" : "")} onClick={openRCloseSubMenu}>
      <div className="p-4 text-center font-bold">{name}</div>
      <SubMenu items={subMenuItems} />
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="absolute top-[62px] left-0 hidden w-full bg-gradient-to-r from-rose-500 to-pink-500 peer-open:block">
      <MenuItem name="Home" />
      <MenuItem name="Lineup" />
      <MenuItem
        name="Tickets"
        subMenuItems={["Single Day Ticket", "7 Day Ticket"]}
      />
      <MenuItem name="Support"/>
    </div>
  );
}

function MobileNav() {

  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  function openRCloseMobileMenu() {
    const visibility = isMobileMenuVisible ? false : true;
    setIsMobileMenuVisible(visibility);
  }

  return (
    <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
      <HamburgerIcon mobileMenuVisibility={isMobileMenuVisible} handleMobileMenuVisibility={openRCloseMobileMenu}/>
      <MobileMenu />
    </div>
  );
}

export default MobileNav;
