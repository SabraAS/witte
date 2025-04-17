import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <Image fill src="/logo-orange.svg" className="footer__logo" alt="witte logo" />
          <div className="footer__socials">
            <Image fill className="footer__icon" src="/linkedin.svg" alt="Linkedin logo" onClick={() => window.open('https://www.linkedin.com/company/witte-advogados/', '_blank')} />
            <Image fill className="footer__icon" src="/email.svg" alt="email logo" onClick={() => window.open('mailto:contato@witteadv.com.br', '_blank')} />
          </div>
        </div>
        <p className="footer__text">
          Copyright Witte Adv, Rio de Janeiro, 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;