'use client';

import styles from './styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      {/* Top Navigation Section */}
      <section id="header-top-section" className={styles.headerTopSection}>
        <div className={`${styles.headerTopItem} d-none-mobile`}>
          <Image src="/icons/nav-top-icon.png" alt="Top Logo" width={16} height={16} />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className={`${styles.headerTopItem} d-none-mobile`}>
          <Image src="/icons/nav-top-icon.png" alt="Top Logo" width={16} height={16} />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className={styles.headerTopItem}>
          <Image src="/icons/nav-top-icon.png" alt="Top Logo" width={16} height={16} />
          <p>Lorem ipsum dolor</p>
        </div>
      </section>

      {/* Middle Navigation Section */}
      <section id="header-body-section" className={styles.headerBodySection}>
        <div className={styles.companyLogo}>
          <Image src="/icons/company-icon.png" alt="Company Logo" width={36} height={36} />
        </div>
        <div className={styles.companyTitle}>
          <h1>LOGO</h1>
        </div>
        <div id="header-navigation-icons" className={styles.headerNavigationIcons}>
          <div>
            <Image src="/icons/search-icon.png" alt="Search" width={24} height={24} />
          </div>
          <div>
            <Image src="/icons/heart-icon.png" alt="Favorites" width={24} height={24} />
          </div>
          <div>
            <Image src="/icons/shopping-bag-icon.png" alt="Shopping Bag" width={24} height={24} />
          </div>
          <div className={`${styles.headerNavigationIcons} d-none-mobile`}>
            <Image src="/icons/profile-icon.png" alt="Profile" width={24} height={24} />
          </div>
          <div className={`${styles.headerNavigationIcons} d-none-mobile languageSelector`}>
            <b>ENG</b>
            <Image src="/icons/down-arrow-icon.png" alt="Language Selector" width={16} height={16} />
          </div>
        </div>
      </section>

      {/* Bottom Navigation Section */}
      <section id="header-footer-section" className={styles.headerFooterSection}>
        <nav>
          <div className={`${styles.navItem} nav-item-active`}>
            <Link href="/">
              <p>HOME</p>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/shop">
              <p>SHOP</p>
            </Link>
          </div>
          <div className={`${styles.navItem} d-none-mobile`}>
            <Link href="/skills">
              <p>SKILLS</p>
            </Link>
          </div>
          <div className={`${styles.navItem} d-none-mobile`}>
            <Link href="/stories">
              <p>STORIES</p>
            </Link>
          </div>
          <div className={`${styles.navItem} d-none-mobile`}>
            <Link href="/about">
              <p>ABOUT</p>
            </Link>
          </div>
          <div className={`${styles.navItem} d-none-mobile`}>
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