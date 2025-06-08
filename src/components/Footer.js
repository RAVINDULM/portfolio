import BackToTop from "./backtotop/BackToTop";

const Footer = () => (
  <footer className="footer">
    <BackToTop />
    <p>© {new Date().getFullYear()}  Ravindu Madhubhashana. All rights reserved.</p>
  </footer>
);

export default Footer;
