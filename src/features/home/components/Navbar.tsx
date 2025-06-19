import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/stories">Stories</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;