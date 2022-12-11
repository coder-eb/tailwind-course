import logo from '../assets/images/logo-inverted.png';
import MenuItem from './MenuItem';

function LogoSection() {
  return (
    <div className="flex items-center p-2 gap-2">
      <img src={logo} width="50"/>
      <div className="font-bold text-2xl">
        tw:<span className="text-sky-900">mf</span>
      </div>
    </div>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden md:flex flex-1 items-center justify-end">
      <MenuItem name='Home' subMenuItems={[]}/>
      <MenuItem name='Lineup' subMenuItems={[]}/>
      <MenuItem name='Tickets' subMenuItems={['Single Day Ticket', '7 Day Ticket']}/>
      <MenuItem name='Support' subMenuItems={[]}/>
    </div>
  )
}

function NavBar() {
    return (
        <nav className="sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
          <LogoSection/>
          <DesktopMenu/>
        </nav>
    );
}

export default NavBar;
