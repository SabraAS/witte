import { useState, useEffect } from 'react';
import Image from 'next/image';
import { sendGAEvent } from '@next/third-parties/google';

const Links = ({ isMobile }) => {
  return (
    <div className={`navbar__links navbar__links--${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="navbar__links-item" onClick={() => {
        sendGAEvent('navbar_servicos_click');
        window.location.href = '#servicos';
      }}>
        <span>Serviços</span>
        <Image fill src={"/arrow.svg"} className="navbar__links-icon" alt="arrow down" />
      </div>
      <a className="navbar__links-item" href="#clientes" onClick={() => {
        sendGAEvent('navbar_clientes_click');
      }}>Clientes</a>
      <a className="navbar__links-item" href="#equipe" onClick={() => {
        sendGAEvent('navbar_equipe_click');
      }}>Equipe</a>
    </div>
  )
};

const Navbar = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    window.onscroll = () => {
      setIsMenuOpen(false);
    };
  });

  return (
    <header className="navbar">
      <div className="navbar__menu-container">
        <Image fill src={"/logo.svg"} className="navbar__logo" alt="witte logo" onClick={() => {
          sendGAEvent('navbar_logo_click');
          window.location.href = '#';
        }} />
        <button className="navbar__menu-button" type="button" onClick={() => {
          sendGAEvent('navbar_menu_button_click');
          setIsMenuOpen(!isMenuOpen);
        }}>
          <Image fill src={"/menu.svg"} alt="menu" />
        </button>
        <Links isMobile={false} />
      </div>
      {isMenuOpen && (
        <Links isMobile={true} />
      )}
    </header>
  );
};

export default Navbar;