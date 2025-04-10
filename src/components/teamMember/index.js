import Image from 'next/image';
import { useState } from "react";
const TeamMember = ({ img, name, description, text, linkedin, site, invert, setShowMore, fullScreen, isMobile }) => {
  const [showMoreMobile, setShowMoreMobile] = useState(false);

  const handleShowMore = () => {
    if (isMobile) {
      setShowMoreMobile(!showMoreMobile);
    } else {
      setShowMore({ img, name, description, text, linkedin, site, invert });
    }
  }

  return (
    <section className="team-member">
      <div className={`team-member__container ${fullScreen ? 'team-member__container--full' : ''}`}>
        <div className="team-member__title">
          <p className="team-member__name">{name}{description && ','}</p>
          <p className="team-member__description">{description}</p>
        </div>

        {!fullScreen && 
          <Image fill className={`team-member__img ${invert ? 'team-member__img--invert' : ''} ${fullScreen ? 'team-member__img--full-screen' : ''}`} src={img} alt={'foto de perfil de ' + name} />
        }

        <p className={`team-member__text ${!fullScreen ? 'team-member__text--clip' : ''} ${showMoreMobile ? 'team-member__text--mobile' : ''}`}>{text}</p>

        <div className={`team-member__social ${fullScreen ? 'team-member__social--full' : ''}`}>
        {fullScreen ?
          <>
            <a className="team-member__social-site" href={linkedin} target="_blank" rel="noopener noreferrer">
              Site
            </a>
            <a className="team-member__social-linkedin" href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </>
          :
        <>
          <button className="team-member__social-more" onClick={handleShowMore}>{isMobile ? (showMoreMobile ? 'Saiba menos' : 'Saiba mais') : <a href="#equipe">Saiba mais</a>}</button>
            <a className="team-member__social-linkedin" href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </>
        }
        </div>

        {fullScreen &&
          <button className="team-member__close" onClick={() => setShowMore()}>
              <Image fill src={'/arrow-left.svg'} alt="voltar" /> Voltar
          </button>
        }
      </div>
      {fullScreen && 
        <Image fill className={`team-member__img team-member__img--full ${invert ? 'team-member__img--invert' : ''} ${fullScreen ? 'team-member__img--full-screen' : ''}`} src={img} alt={'foto de perfil de ' + name} />
      }
    </section>
  );
};

export default TeamMember;