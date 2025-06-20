import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      {/* Top Navigation Section */}
      <section id="header-top-section">
        <div className="header-top-item d-none-mobile">
          <Image src="/icons/nav-top-icon.png" alt="Top Logo" width={16} height={16} />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="header-top-item d-none-mobile">
          <Image src="/icons/nav-top-icon.png" alt="Top Logo" width={16} height={16} />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="header-top-item">
          <Image src="/icons/nav-top-icon.png" alt="Top Logo" width={16} height={16} />
          <p>Lorem ipsum dolor</p>
        </div>
      </section>

      {/* Middle Navigation Section */}
      <section id="header-body-section">
        <div className="company-logo">
          <Image src="/icons/company-icon.png" alt="Company Logo" width={36} height={36} />
        </div>
        <div className="company-title">
          <h1>LOGO</h1>
        </div>
        <div id="header-navigation-icons">
          <div>
            <Image src="/icons/search-icon.png" alt="Search" width={24} height={24} />
          </div>
          <div>
            <Image src="/icons/heart-icon.png" alt="Favorites" width={24} height={24} />
          </div>
          <div>
            <Image src="/icons/shopping-bag-icon.png" alt="Shopping Bag" width={24} height={24} />
          </div>
          <div className="d-none-mobile">
            <Image src="/icons/profile-icon.png" alt="Profile" width={24} height={24} />
          </div>
          <div className="d-none-mobile" style={{ display: 'flex', alignItems: 'center' }}>
            <b style={{ marginRight: '6px', fontSize: '16px', letterSpacing: '1px' }}>ENG</b>
            <Image src="/icons/down-arrow-icon.png" alt="Language Selector" width={16} height={16} />
          </div>
        </div>
      </section>

      {/* Bottom Navigation Section */}
      <section id="header-footer-section">
        <nav>
          <div className="nav-item nav-item-active">
            <Link href="/">
              <p>HOME</p>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/shop">
              <p>SHOP</p>
            </Link>
          </div>
          <div className="nav-item d-none-mobile">
            <Link href="/skills">
              <p>SKILLS</p>
            </Link>
          </div>
          <div className="nav-item d-none-mobile">
            <Link href="/stories">
              <p>STORIES</p>
            </Link>
          </div>
          <div className="nav-item d-none-mobile">
            <Link href="/about">
              <p>ABOUT</p>
            </Link>
          </div>
          <div className="nav-item d-none-mobile">
            <Link href="/contact">
              <p>CONTACT US</p>
            </Link>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;