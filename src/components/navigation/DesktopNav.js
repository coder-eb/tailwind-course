function SubMenuItem({ itemName }) {
  return (
    <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
      <span>{itemName}</span>
    </div>
  );
}

function SubMenu({ items }) {
  const subMenu = items.map((item, index) => <SubMenuItem key={index.toString()} itemName={item} />);
  return (
    <div className="absolute top-full right-0 hidden whitespace-nowrap rounded-b-md bg-pink-500 text-right group-hover:block">
      {subMenu}
    </div>
  );
}

function MenuItem({ name, subMenuItems = [] }) {
  return (
    <div className="group relative flex h-full cursor-pointer items-center p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/10 hover:text-zinc-200">
      <span>{name}</span>
      { subMenuItems.length > 0 && <SubMenu items={subMenuItems} /> }
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

export default DesktopNav;
