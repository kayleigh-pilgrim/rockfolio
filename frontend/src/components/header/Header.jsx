const NavbarLink = ({ href, children }) => {
  const active =
    window.location.pathname === href
      ? 'text-violet-800 font-medium'
      : 'hover:text-violet-600 ease-in-out transition-colors duration-300';
  return (
    <li className="text-xl">
      <a href={href} className={active}>
        {children}
      </a>
    </li>
  );
};

const Navbar = ({ children }) => {
  return (
    <nav>
      <ul className="flex space-x-4">{children}</ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Navbar>
        <NavbarLink href="/">Dashboard</NavbarLink>
      </Navbar>
      <Navbar>
        <NavbarLink href="#!">Settings</NavbarLink>
        <NavbarLink href="#!">Logout</NavbarLink>
      </Navbar>
    </header>
  );
};

export default Header;
