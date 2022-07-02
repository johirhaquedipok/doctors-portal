import footer from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <div>
      <footer
        className="footer pt-16 pb-11 px-4 lg:px-12 "
        style={{ background: `url(${footer}) no-repeat center /cover` }}
      >
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <p className="text-center mb-16">Copyright 2022 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
