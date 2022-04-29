import '../styles/components/Footer.scss';

import bottomFavicon from '../images/favicon-32x32.png';

const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="footer__text">Awesome profile-cards ©2022</p>
      <img className="footer__img" src={bottomFavicon} alt="" />
    </footer>
  );
};

export default Footer;
