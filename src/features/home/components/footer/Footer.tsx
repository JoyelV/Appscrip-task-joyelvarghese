import Image from 'next/image';
import styles from './styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <section id="footer-top" className={styles.footerTop}>
        <section id="subscribe-section" className={styles.subscribeSection}>
          <div className={styles.subscribeHeader}>
            <p className={styles.footerHeading}>Be the first to know</p>
          </div>
          <p className={styles.footerInfo}>Sign up for updates from mettā muse.</p>
          <div className={styles.footerFormSection}>
            <form>
              <input type="email" placeholder="Enter Your E-mail" />
              <button>SUBSCRIBE</button>
            </form>
          </div>
        </section>
        <section id="footer-top-info-section" className={styles.footerTopInfoSection}>
          <section id="contact-us-section" className={styles.contactUsSection}>
            <div>
              <p className={styles.footerHeading}>CONTACT US</p>
            </div>
            <p className={styles.footerInfo}>+44 221 133 5360</p>
            <p className={styles.footerInfo}>customercare@mettamuse.com</p>
          </section>
          <section id="currency-section" className={styles.currencySection}>
            <div>
              <p className={styles.footerHeading}>CURRENCY</p>
            </div>
            <div className={styles.currencyInfo}>
              <Image src="/images/us-flag-icon.png" alt="US Flag" width={16} height={16} />
              <b>+ USD</b>
            </div>
            <p className={`${styles.footerInfo} ${styles.hiddenText}`}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </section>
        </section>
      </section>
      <hr className={styles.footerHr} />
      <section id="footer-bottom" className={styles.footerBottom}>
        <section className={`${styles.footerBottomSection} ${styles.companyInfo}`}>
          <div className={styles.footerHeadingSection}>
            <p className={styles.footerHeading}>mettā muse</p>
            <Image
              src="/icons/filter-down-arrow-icon.png"
              alt="Arrow Down"
              width={16}
              height={16}
              className={styles.dBlockMobile}
            />
          </div>
          <div className={`${styles.footerBottomInfo} ${styles.dNoneMobile}`}>
            <p className={styles.footerInfo}>About Us</p>
            <p className={styles.footerInfo}>Stories</p>
            <p className={styles.footerInfo}>Artisans</p>
            <p className={styles.footerInfo}>Boutiques</p>
            <p className={styles.footerInfo}>Contact Us</p>
            <p className={styles.footerInfo}>EU Compliances Docs</p>
          </div>
        </section>
        <section className={styles.footerBottomSection}>
          <div className={styles.footerHeadingSection}>
            <p className={styles.footerHeading}>Quick Links</p>
            <Image
              src="/icons/filter-down-arrow-icon.png"
              alt="Arrow Down"
              width={16}
              height={16}
              className={styles.dBlockMobile}
            />
          </div>
          <div className={`${styles.footerBottomInfo} ${styles.dNoneMobile}`}>
            <p className={styles.footerInfo}>Orders & Shipping</p>
            <p className={styles.footerInfo}>Join/Login as a Seller</p>
            <p className={styles.footerInfo}>Payment & Pricing</p>
            <p className={styles.footerInfo}>Return & Refunds</p>
            <p className={styles.footerInfo}>FAQs</p>
            <p className={styles.footerInfo}>Privacy Policy</p>
            <p className={styles.footerInfo}>Terms & Conditions</p>
          </div>
        </section>
        <section className={styles.footerBottomSection}>
          <section className={styles.followUsSection}>
            <div className={styles.footerHeadingSection}>
              <p className={styles.footerHeading}>Follow Us</p>
              <Image
                src="/icons/filter-down-arrow-icon.png"
                alt="Arrow Down"
                width={20}
                height={20}
                className={styles.dBlockMobile}
              />
            </div>
            <div>
              <div className={`${styles.footerBottomInfo} ${styles.dNoneMobile}`}>
                <Image src="/icons/insta-icon.png" alt="Instagram Logo" width={24} height={24} />
                <Image src="/icons/linkedin-icon.png" alt="LinkedIn Logo" width={24} height={24} />
              </div>
            </div>
          </section>
          <section className={styles.paymentsSection}>
            <div>
              <p className={styles.footerHeading}>mettā muse Accepts</p>
            </div>
            <div className={styles.paymentsInfo}>
              <Image src="/images/gpay-payment-icon.png" alt="G Pay" width={40} height={24} />
              <Image src="/images/master-card-payment-icon.png" alt="Mastercard" width={40} height={24} />
              <Image src="/images/paypal-payment-icon.png" alt="PayPal" width={40} height={24} />
              <Image src="/images/amex-payment-icon.png" alt="Amex" width={40} height={24} />
              <Image src="/images/apple-payment-icon.png" alt="Apple Pay" width={40} height={24} />
              <Image src="/images/qpay-payment-icon.png" alt="Q Pay" width={40} height={24} />
            </div>
          </section>
        </section>
      </section>
      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;