import TeamMember from "../teamMember";
import Image from 'next/image';
import { useState, useEffect } from "react";
const mainMembers = [
  {
    img: '/Natalie.png',
    name: 'Natalie Witte',
    description: 'advogada e empreendedora',
    text: 'Com mais de 20 anos de experiência como assessora jurídica para empresas de tecnologia e precursora no mundo das Startups, Natalie Witte é especialista em societário, M&A e Business Negotiation. Hoje assessora Startups e Investidores Anjo, nos diversos momentos de crescimento, além de ser mentora de diversos programas de aceleração, nacionais e internacionais. Foi ganhadora do Startup Awards, o Oscar do Empreendedorismo, como Melhor Assessoria Jurídica de 2016, e é vice-presidente da Comissão da OAB/RJ de Pequenas e Médias Empresas. Ainda é investidora pela GR8 Ventures, e desde 2020, indicada como uma das 100 TOP Women Investors in Latin America Tech pela LAVCA.',
    linkedin: 'https://linkedin.com/in//nataliewitte',
    invert: true
  },
  {
    img: '/Tayna.png',
    name: 'Tayna Nascimento',
    description: 'advogada e empreendedora',
    text: 'Graduada em Direito pela UCDB e pós graduada no curso de Direito Empresarial pela PUC-Rio. Advogada com mais de 8 anos de experiência nas áreas de Direito Empresarial, LGPD, Contencioso estratégico, Contratos Parceria Público-Privada, Licitações e Contencioso Cível. Atuou como mentora jurídica em diversos programas de aceleração de Startups, Hackathons e Startup Weekend viabilizando juridicamente diversos projetos de inovação . Foi co-founder da startup buddy.vet, captou investimentos, liderou a gestão de contratos e parcerias comerciais e governança corporativa. Foi membro da Comissão de Startups da OAB-RJ.',
    linkedin: 'https://linkedin.com/in/taynanascimento07',
  },
  {
    img: '/Aleksandra.png',
    name: 'Aleksandra Andrade',
    description: '',
    text: 'Graduanda em Direito pela UERJ, com experiência de 5 anos na prática jurídica. Aleksandra Andrade, iniciou sua trajetória como digitadora de audiências cíveis, onde desenvolveu habilidades detalhistas e conhecimento processual. Atuou no setor paralegal, com capacitação em Direito Digital, sendo responsável por demandas empresariais abrangentes, desde a constituição de empresas até consultorias para meio corporativo. No campo do Direito Tributário, integrou a equipe do renomado escritório Bichara Advogados, acumulando vivência em estratégias fiscais e tributárias. Hoje, atua junto ao Witte Advogados, especializando-se no universo de Startups e Direito Empresarial, onde alia expertise jurídica e visão inovadora para atender as necessidades de negócios emergentes. Além de sua atuação no Direito, destaca-se como founder da Atenas Futevôlei, empreendimento que reflete sua crença no equilíbrio entre saúde mental e física como pilares para uma vida plena.',
    linkedin: 'https://linkedin.com/in//aleksandra-andrade-5b3647322',
  }
]

const otherMembers = [
  {
    img: '/Guilherme.png',
    name: 'Guilherme Abrantes',
    description: 'advogado parceiro',
    text: 'Com mais de 25 anos de experiência em assuntos de propriedade intelectual, Guilherme representa empresas nacionais e estrangeiras administrativa e judicialmente na proteção dos seus ativos intangíveis. Já foi membro do Comitê de Marcas Famosas e de Alto Renome e atualmente é Presidente Global do Comitê de Práticas dos Escritórios de Marcas da International Trademark Association - INTA. Autor de múltiplos artigos publicados no Brasil e no exterior. Indicado como IP Star e recomendado por várias publicações internacionais desde 2013, como Managing IP, Chambers & Partners, Legal500, World Trademark Review, World IP Review e Best Lawyers.', 
    linkedin: 'https://linkedin.com/in/guilherme-abrantes-09875a4',
    site: 'https://aboip.com/pt',
  },
  {
    img: '/Fernando.png',
    name: 'Fernando Vianna',
    description: 'advogado parceiro',
    text: 'Experiência de mais de 20 anos como profissional do Direito, agindo em todas as esferas das Justiças Estadual e Federal, assim como consultoria jurídica de empresas com objetivo de análise de contratos vigentes e mitigação de riscos jurídicos. Mediador Judicial de Conflitos do Tribunal de Justiça do Rio de Janeiro desde 2016 com vasta experiência nas áreas de família e empresarial. ',
    linkedin: 'https://www.linkedin.com/in/fernando-vianna-03347bba/',
    site: '',
  },
  {
    img: '/Emilia.png',
    name: 'Emilia Garcez',
    description: 'advogada parceira',
    text: 'Advogada com especialização em Direito Privado pela UFF, extensão em Direito Empresarial pela UERJ e LL.M em Direito Empresarial pela FGV-Rio. Sócia-fundadora do escritório Emília Garcez Advocacia Empresarial, atua na advocacia preventiva voltada para Pequenas e Médias Empresas. Conselheira do Fórum Permanente de Desenvolvimento do Estado do Rio de Janeiro. Na OAB/RJ, foi pioneira na criação da Comissão de Direito da Pequena e Média Empresa, que atualmente preside, além de ser Diretora de Apoio à Advocacia. Também lidera projetos como Empreendendo na Advocacia e o Curso de Certificação Profissional, e é mentora no programa Startup Rio.',
    linkedin: 'https://www.linkedin.com/in/em%C3%ADliagarcezadvogada',
    site: 'https://egarcez.adv.br/mentoria.html',
  },
  {
    img: '/GEP.png',
    name: 'GEP Compliance',
    description: 'empresa parceira',
    text: 'A GEP é a consultoria líder do mercado na implementação de projetos e soluções nas áreas de Privacidade e Proteção de Dados Pessoais, Integridade Empresarial, Compliance, Gestão de Riscos, Governança Corporativa e ESG.',
    linkedin: 'https://www.gepcompliance.com.br/',
    site: 'https://www.linkedin.com/company/gep-solucoes-em-compliance/',
  },
]

const Team = ({ isMobile }) => {
  const [isWide, setIsWide] = useState(false);
  const [firstPosition, setFirstPosition] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(min-width: 1920px)");
    const onChange = (e) => setIsWide(e.matches);
  
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
    } else {
      mql.addListener(onChange); // fallback for older browsers
    }
  
    setIsWide(mql.matches);
  
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, []);

  return (
    <section className="team" id="equipe">
      <h2 className="team__title">Equipe</h2>
      {!showMore ? (
        <>
          <p className="team__text">
            Nos orgulhamos em fomentar a troca, a criação de comunidades e hoje contamos com uma excelente equipe e uma extensa rede de parceiros para auxiliar nos mais diversos escopos de atuação.
          </p>
          <div className="team__content">
            {mainMembers.map((member) => (
              <div className="team__item" key={member.name}>
                <TeamMember {...member} isMobile={isMobile} setShowMore={(member) => setShowMore(member)} />
              </div>
            ))}
          </div>
          {isWide || isMobile ? 
            <div className="team__carousel">
              {otherMembers.map((member) => (
                <div className="team__item" key={member.name}>
                  <TeamMember {...member} isMobile={isMobile} showAllSocials={true} setShowMore={(member) => setShowMore(member)} />
                </div>
              ))}
            </div> 
            :
              <div className="team__carousel">
                {firstPosition > 0 &&
                  <button
                  className="team__carousel-button team__carousel-button--previous"
                  type="button"
                  onClick={() => setFirstPosition(firstPosition - 1)}>
                    <Image fill src={'/arrow-left.svg'} alt="voltar" />
                  </button>
                }
                {otherMembers.slice(firstPosition, firstPosition + 3).map((member) => (
                  <div className="team__item" key={member.name}>
                    <TeamMember {...member} showAllSocials={true} setShowMore={(member) => setShowMore(member)} />
                  </div>
                ))}
                {firstPosition + 3 < otherMembers.length &&
                  <button
                  className="team__carousel-button"
                  type="button"
                  onClick={() => setFirstPosition(firstPosition + 1)}>
                    <Image fill src={'/arrow-right.svg'} alt="avançar" />
                  </button>
                }
              </div>
            }
        </>
      ) : (
        <TeamMember {...showMore} fullScreen setShowMore={() => setShowMore()} />
      )}
    </section>
  );
};

export default Team;