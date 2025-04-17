import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__info">
          <div className="hero__main">
            <h1 className="hero__title">
              Soluções jurídicas para alavancar o crescimento da sua empresa
            </h1>
            <p className="hero__description">
              <span>Apoiamos seu negócio de tecnologia desde </span>
              <span>o primeiro contrato e até o exit</span>
            </p>
            <button className="hero__button" onClick={() => window.location.href = '#servicos'}>Conheça</button>
          </div>

          <div className="hero__awards hero__awards--desktop">
            <div className="hero__section">
                <p>Nossos prêmios</p>
                <div className="hero__awards-items">
                <div className="hero__awards-item">
                  <Image fill src={"/lavca.png"} alt="prêmio lavca" onClick={() => window.open('https://www.lavca.org/women/#', '_blank')} />

                </div>
                <div className="hero__awards-item">
                  <Image fill src={"/startup.png"} alt="prêmio startup awars 2016" onClick={() => window.open('https://revistapegn.globo.com/Startups/noticia/2016/11/meliuz-ganha-premio-startup-awards-no-case-2016.html', '_blank')} />
                </div>
              </div>
            </div>
            <div className="hero__section">
              <p>Livros publicados</p>
              <div className="hero__awards-items">
                <div className="hero__awards-item">
                  <Image fill src={"/mulheres.png"} alt="mulheres na tecnologia" onClick={() => window.open('https://a.co/d/fMG1VQ1', '_blank')} />
                </div>
                <div className="hero__awards-item">
                  <Image fill src={"/direito.png"} alt="direito das startups" onClick={() => window.open('https://a.co/d/aNyYexX', '_blank')} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__awards hero__awards--mobile">
          <div className="hero__section">
            <p>Nossos prêmios & Livros publicados</p>
            <div className="hero__awards-items">
              <div className="hero__awards-item">
                <Image fill src={"/lavca.png"} alt="prêmio lavca" onClick={() => window.open('https://www.lavca.org/women/#', '_blank')} />
              </div>
              <div className="hero__awards-item">
                <Image fill src={"/startup.png"} alt="prêmio startup awars 2016" onClick={() => window.open('https://revistapegn.globo.com/Startups/noticia/2016/11/meliuz-ganha-premio-startup-awards-no-case-2016.html', '_blank')} />
              </div>
              <div className="hero__awards-item">
                <Image fill src={"/mulheres.png"} alt="mulheres na tecnologia" onClick={() => window.open('https://a.co/d/fMG1VQ1', '_blank')} />
              </div>
              <div className="hero__awards-item">
                <Image fill src={"/direito.png"} alt="direito das startups" onClick={() => window.open('https://a.co/d/aNyYexX', '_blank')} />
              </div>
            </div>
          </div>
        </div>
        <Image fill className="hero__image" src={"/hero.png"} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;