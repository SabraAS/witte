import Image from 'next/image';

const Contact = () => {
  return (
    <section className="contact section">
      <div className="contact__content">
        <div>
          <p className="section__title">Vamos conversar</p>
          <p className="contact__description section__description">
            Entre em contato
          </p>
        </div>
        <div className="contact__items">
          <div className="contact__item" onClick={() => window.open('https://www.linkedin.com/company/witte-advogados/', '_blank')}>
            <Image fill src="/linkedin.svg" alt="Linkedin logo" />
            <p>Linkedin</p>
          </div>
          <div className="contact__item" onClick={() => window.open('mailto:contato@witteadv.com.br', '_blank')}>
            <Image fill src="/email.svg" alt="email logo" />
            <p>contato@witteadv.com.br</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;