const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Be the First to Know</h3>
        <input type="email" placeholder="Enter your email" className="footer-input" />
        <button className="footer-button">Subscribe</button>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>customer@email.com</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li>Order Status</li>
          <li>Shipping</li>
          <li>Return & Refunds</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;