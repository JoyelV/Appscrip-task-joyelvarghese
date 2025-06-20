import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <section id="footer-top">
        <section id="subscribe-section">
          <div style={{ margin: '14px 0px' }}>
            <p className="footer-heading">Be the first to know</p>
          </div>
          <p className="footer-info">Sign up for updates from mettā muse.</p>
          <div className="footer-form-section">
            <form>
              <input type="email" placeholder="Enter Your E-mail" />
              <button>SUBSCRIBE</button>
            </form>
          </div>
        </section>
        <section id="footer-top-info-section">
          <section id="contact-us-section" style={{ marginBottom: '14px' }}>
            <div>
              <p className="footer-heading">CONTACT US</p>
            </div>
            <p className="footer-info">+44 221 133 5360</p>
            <p className="footer-info">customercare@mettamuse.com</p>
          </section>
          <section id="currency-section">
            <div>
              <p className="footer-heading">CURRENCY</p>
            </div>
            <div className="footer-info" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <Image src="/images/us-flag-icon.png" alt="US Flag" width={16} height={16} />
              <b>+ USD</b>
            </div>
            <p style={{ fontSize: '12px' }} className="hidden">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </section>
        </section>
      </section>
      <hr />
      <section id="footer-bottom">
        <section className="footer-bottom-section oter-company-info">
          <div className="footer-heading-section">
            <p className="footer-heading">mettā muse</p>
            <Image src="/icons/filter-down-arrow-icon.png" alt="Arrow Down" width={16} height={16} className="d-block-mobile" />
          </div>
          <div className="footer-bottom-info d-none-mobile">
            <p className="footer-info">About Us</p>
            <p className="footer-info">Stories</p>
            <p className="footer-info">Artisans</p>
            <p className="footer-info">Boutiques</p>
            <p className="footer-info">Contact Us</p>
            <p className="footer-info">EU Compliances Docs</p>
          </div>
        </section>
        <section className="footer-bottom-section">
          <div className="footer-heading-section">
            <p className="footer-heading">Quick Links</p>
            <Image src="/icons/filter-down-arrow-icon.png" alt="Arrow Down" width={16} height={16} className="d-block-mobile" />
          </div>
          <div className="footer-bottom-info d-none-mobile">
            <p className="footer-info">Orders & Shipping</p>
            <p className="footer-info">Join/Login as a Seller</p>
            <p className="footer-info">Payment & Pricing</p>
            <p className="footer-info">Return & Refunds</p>
            <p className="footer-info">FAQs</p>
            <p className="footer-info">Privacy Policy</p>
            <p className="footer-info">Terms & Conditions</p>
          </div>
        </section>
        <section className="footer-bottom-section">
          <section className="footer-bottom-section follow-us-section">
            <div className="footer-heading-section">
              <p className="footer-heading">Follow Us</p>
              <Image
                src="/icons/filter-down-arrow-icon.png"
                alt="Arrow Down"
                width={20}
                height={20}
                className="d-block-mobile"
              />
            </div>
            <div>
              <div className="footer-bottom-info d-none-mobile">
                <Image src="/icons/insta-icon.png" alt="Instagram Logo" width={24} height={24} />
                <Image src="/icons/linkedin-icon.png" alt="LinkedIn Logo" width={24} height={24} />
              </div>
            </div>
          </section>
          <section className="payments-section" style={{ marginTop: '22px' }}>
            <div>
              <p className="footer-heading">mettā muse Accepts</p>
            </div>
            <div className="payments-info">
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
      <center>
        <p style={{ fontSize: '14px', margin: '16px auto', opacity: '65%' }}>Copyright © 2023 mettamuse. All rights reserved.</p>
      </center>
    </footer>
  );
};

export default Footer;