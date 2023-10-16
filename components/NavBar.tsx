import { UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const NavBar = () => {
  return (
    <nav>
      <Logo />
      <div>
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
