import Image from 'next/image';

const Activity = ({ icon, title, content }) => {
  return (
    <section className="activity">
      <div className="activity__icon">
        <Image fill src={icon} alt={'ícone'} />
      </div>
      <p className="activity__title">{title}</p>
      <p className="activity__content">{content}</p>
    </section>
  );
};

export default Activity;