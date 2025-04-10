import Image from 'next/image';

const Contact = () => {
  return (
    <section className="contact">
      <div>
        <p className="contact__title">Vamos conversar</p>
        <p className="contact__text">
          Entre em contato
      </p>
      </div>
      <div className="contact__content">
        <div className="contact__item" onClick={() => window.open('https://www.linkedin.com/company/witte-advogados/', '_blank')}>
          <Image fill src="/linkedin.svg" alt="Linkedin logo" />
          <p>Linkedin</p>
        </div>
        <div className="contact__item" onClick={() => window.open('mailto:contato@witteadv.com', '_blank')}>
          <Image fill src="/email.svg" alt="email logo" />
          <p>contato@witteadv.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;