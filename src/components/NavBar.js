import logo from '../assets/images/logo-inverted.png';
import MenuItem from './MenuItem';

function LogoSection() {
  return (
    <div class="flex items-center p-2 gap-2">
      <img src={logo} width="50"/>
      <div class="font-bold text-2xl">
        tw:<span class="text-sky-900">mf</span>
      </div>
    </div>
  );
}

function NavBar() {
    return (
        <nav class="sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500">
          <LogoSection/>
          <div class="flex flex-1 items-center justify-end">
            <MenuItem name='Home'/>
            <MenuItem name='Lineup'/>
            <MenuItem name='Tickets'/>
            <MenuItem name='Support'/>
          </div>
        </nav>
    );
}

export default NavBar;
