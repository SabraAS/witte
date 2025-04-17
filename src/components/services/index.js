import { useState } from "react";

const servicos = [
  {
    title: "Constituição de sociedade empresarial",
    content: "Ltda., S.A. e Assembléias Gerais",
    extra: [
    'Orientação e estruturação na criação da empresa, garantindo que as decisões sejam tomadas em conformidade com a legislação e as necessidades específicas do negócio: ',
    "Escolha do Tipo de Sociedade",
    "Elaboração de Documentos Societários",
    "Planejamento Tributário e Societário",
    "Registro e Formalização",
    "Acordos entre Sócios",
    "Compliance e Governança",
    "Mitigação de Riscos Jurídicos",
    "Consultoria em Aspectos Específicos",
    ],
  },
  {
    title: "Revisão de contratos",
    content: "Parcerias comerciais, fornecedores, clientes e contratos em geral",
    extra: [
      "Análise de Cláusulas e Condições",
      "Adequação Legal",
      "Proteção de Direitos e Interesses",
      "Verificação de Termos de Pagamento e Obrigações",
      "Prevenção de Riscos Legais",
      "Negociação e Revisão de Termos",
      "Cláusulas de Rescisão, Penalidades e Garantias",
      "Redação de Contratos",
    ],
  },
  {
    title: "Resposta a intimações e notificações",
    content: "Notificação de cobrança, Intimação judicial, Notificação de órgãos públicos, Notificações trabalhistas",
    extra: [
      "Análise da Intimação ou Notificação",
      "Elaboração de Respostas ou Defesas",
      "Gestão de Prazos e Estratégias",
      "Orientação ao Cliente",
      "Mediação e Negociação",
      "Resposta a Órgãos Reguladores",
      "Resposta a autuações ou fiscalizações, como multas ou irregularidades apontadas.",
      "Desenvolvimento de estratégias para minimizar impactos financeiros, reputacionais ou operacionais decorrentes da intimação ou notificação.",
    ],
  },
  {
    title: "Elaboração de planos de Stock Option",
    content: "Desenvolvimento de estratégias legais e contratuais para a implementação de programas de incentivo baseados em ações",
    extra: [
      "Compreensão das Necessidades da Empresa",
      "Elaboração do Plano de Stock Option",
      "Conformidade Legal e Tributária",
      "Estruturação Contratual e Estatuto Social",
      "Definição de Cláusulas Específicas",
      "Gestão de Riscos",
      "Acompanhamento e Atualização",
      "Comunicação clara com os participantes, ajudando-os a tomar decisões informadas.",
    ],
  },
  {
    title: "Termos de uso",
    content: "Documento que regula as condições para o uso de produtos, serviços ou plataformas digitais, como sites, aplicativos ou softwares.",
    extra: [
      "O termo de uso define os direitos, deveres e responsabilidades tanto da empresa quanto dos usuários, sendo essencial para proteger juridicamente o negócio e garantir conformidade com as leis aplicáveis.",  
      "Análise do Negócio e do Serviço",
      "Estruturação e Redação do Documento",
      "Escopo do serviço.",
      "Regras para os usuários: Direitos, deveres e comportamentos proibidos.",
      "Propriedade intelectual: Proteção do conteúdo, marcas, software, e outros ativos intangíveis da empresa.",
      "Limitação de responsabilidade: Redução de riscos jurídicos em caso de mal uso ou problemas técnicos.",
      "Política de uso aceitável: Normas para uso adequado do serviço ou plataforma.",
      "Suspensão ou encerramento de conta: Condições para terminar o acesso ao serviço.",
      "Alterações nos Termos: Procedimento para atualização das condições.",
      "Adequação Legal",
      "Conformidade com legislações locais, nacionais e internacionais aplicáveis, como: Leis de proteção de dados pessoais, como a LGPD (Brasil) ou GDPR (Europa).",
      "Regras de defesa do consumidor.",
      "Normas específicas do setor de atuação (e-commerce, SaaS, marketplaces, etc.).",
      "Integração com Outros Documentos como Política de Privacidade e Contrato de Licença de Uso.",
      "Mitigação de Riscos",
    ],
  },
  {
    title: "Registro de marcas e patentes",
    content: "Proteção legal de ativos de propriedade intelectual, assegurando que os direitos exclusivos sobre marcas, invenções, e outros elementos criativos sejam reconhecidos e resguardados.",
    extra: [
      "Consultoria Inicial no INPI ou em órgãos internacionais",
      "Análise da marca ou invenção (registrabilidade).",
      "Estratégia de Proteção",
      "Registro de Marcas",
      "Acompanhamento Processual",
      "Defesa Administrativa",
      "Registro e enquadramento de Patentes",
      "Redação do pedido, depósito e acompanhamento",
      "Interações com Examinadores e ajustes",
      "Defesa de Direitos",
      "Ações contra Violação",
      "Oposição e Cancelamento",
      "Negociações e Acordos",
      "Registro Internacional de marcas e patentes",
      "Renovação de Registros",
      "Licenciamento e Cessão",
    ],
  },
  {
    title: "LGPD",
    content: "Adequação aos requisitos legais impostos pela lei (Lei nº 13.709/2018) para proteger os direitos dos titulares de dados pessoais",
    extra: [
      "Diagnóstico de Conformidade",
      "Mapeamento de Dados: Realiza um levantamento detalhado dos dados pessoais tratados pela organização, incluindo coleta, armazenamento, uso e descarte.",
      "Identificação de Riscos: Analisa pontos vulneráveis nos processos internos e verifica o grau de conformidade da empresa em relação à LGPD.",
      "Avaliação de Base Legal: Define as bases legais adequadas para os tratamentos de dados realizados pela empresa (consentimento, legítimo interesse, cumprimento de obrigação legal, entre outros).",
      "Elaboração de Documentos Jurídicos",
      "Registros de Operações de Tratamento: Auxilia na criação e manutenção de registros obrigatórios detalhando os tratamentos realizados.",
      "Implementação de Medidas de Compliance.",
      "Gerenciamento de Incidentes",
      "Defesa Administrativa e Judicial",
      "Avaliação de Impacto e Auditoria",
      "Consultoria Estratégica",
    ],
  },
  {
    title: "Term-Sheet",
    content: "É um acordo preliminar que define os principais termos e condições de uma transação antes da formalização de contratos definitivos",
    extra: [
      "Elaboração e Revisão do Term Sheet",
      "Negociação com as Partes Envolvidas",
      "Identificação de Riscos e Mitigação",
      "Conformidade com a Lei",
      "Tradução do Term Sheet em Documentos Legais",
      "Após o Term Sheet ser assinado, o advogado auxilia na transformação desse documento em contratos formais e vinculantes, como:",
      "Contratos de investimento.",
      "Acordos de acionistas.",
      "Contratos de venda ou compra.", 
    ],
  },
  {
    title: "Documentação de investimento",
    content: "Formalização de acordos entre investidores e empresas",
    extra: [
      "Elaboração e Revisão dos Documentos Jurídicos",
      "Negociação de Termos Jurídicos e Comerciais",
      "Análise de Riscos Jurídicos",
      "Estruturação do Investimento",
      "Conformidade Regulatória",
      "Garante que o investimento esteja alinhado com as normas legais aplicáveis, como:",
      "Regras societárias e de mercado de capitais.",
      "Leis tributárias e trabalhistas.",
      "Regulações específicas para investimentos estrangeiros, quando aplicável.",
      "Auxílio em Rodadas Futuras",
    ],
  },
  {
    title: "Mútuos conversíveis, SAFEs, SOPs, dentre outros",
    content: "Garantir que os contratos sejam juridicamente seguros, atendam aos objetivos das partes e estejam alinhados com a legislação aplicável.",
    extra: [
      "Mútuos Conversíveis",
      "Debêntures",
      "SAFEs (Simple Agreement for Future Equity)",
      "Contratos de Opção",
    ],
  },
  {
    title: "Consultivo estratégico",
    content: "Parceiro jurídico para empresas, gestores e investidores, ajudando a tomar decisões informadas e mitigar riscos em questões estratégicas, sem necessariamente entrar em litígios ou disputas judiciais",
    extra: [
      "Planejamento e Estruturação Empresarial",
      "Suporte em fusões, aquisições, cisões e incorporações.",
      "Planejamento Tributário e Regulatório",
      "Análise e Negociação de Contratos",
      "Realiza due diligence preventiva para identificar possíveis riscos jurídicos, financeiros ou reputacionais.",
      "Desenvolve estratégias para prevenir litígios, multas regulatórias e outros problemas legais.",
      "Suporte em Estratégias de Expansão",
      "Planejamento para Captação de Recursos",
      "Estrutura rodadas de investimento (Seed, Series A, B, etc.).",
      "Auxilia na definição de condições jurídicas de instrumentos financeiros como:",
      "Mútuos conversíveis, debêntures, boletins e contratos de opção.",
      "Prepara a empresa para due diligence de investidores.",
      "Conformidade e Sustentabilidade Jurídica",
      "Implementa políticas internas de compliance (antissuborno, proteção de dados, ESG, etc.).",
      "Garante que a empresa atenda a normas trabalhistas, ambientais e de proteção ao consumidor.",
      "Mediação de Conflitos e Alinhamento Estratégico",
      "Facilita a resolução de disputas entre sócios, investidores ou parceiros sem recorrer ao judiciário.",
      "Apoia na construção de estratégias para mudanças organizacionais, como saída de sócios ou sucessão.",
    ],
  },
  {
    title: "Representação Jurídica",
    content: "Atua em esferas administrativas (como órgãos reguladores) ou judiciais (como tribunais), dependendo da origem da intimação.",
    extra: [
      'Representa o cliente em processos judiciais relacionados à intimação, comparecendo a audiências, elaborando petições, apresentando provas que sustentem sua defesa.'
    ],
  },
];

const Services = ({ isMobile }) => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (index) => {
    if (index === null || index === undefined || index === activeService) {
      return setActiveService(null)
    }
    setActiveService(index)
    if (!isMobile) {
      window.location.href = '#servicos'
    }
  };

  return (
    <section className="services" id="servicos">
      <div className="services__content">
        <h3 className="services__title">Serviços</h3>
        <p className="services__description services__description--big">
          Temos uma solução para cada momento da jornada da sua empresa
        </p>
        <p className="services__description">
          Empresas Strong-up: Apoiamos negócios desde a sua fundação, expansão, M&A, rodadas de investimento e em toda a sua jornada. Nossa missão é criar as condições para que sua empresa possa se desenvolver sobre uma base sólida, porque &quot;Start&quot; é só o primeiro passo. 
        </p>
        <div className="services__all-items">
          {activeService !== null && !isMobile && 
            <div className={'services__item services__item--active services__item--desktop'}>
              <h4 className="services__item-number">{activeService+1 < 10 ? `0${activeService+1}` : activeService+1}</h4>
              <h4 className="services__item-title">{servicos[activeService].title}</h4>
              <p className="services__item-content">{servicos[activeService].content}</p>
              <div className="services__item-content">
                {servicos[activeService].extra.map((extra, index) => (
                  <p key={index}>{extra}</p>
                ))}
              </div>
              <button className={'services__item-button'} onClick={() => setActiveService(null)}>Ver todos os serviços</button>
            </div>
          }

          <div className="services__items">
            {servicos.map((service, index) => (
              <div className={`services__item ${activeService === index && !isMobile ? 'services__item--disabled' : ''}`} key={index}>
                <h4 className="services__item-number">{index+1 < 10 ? `0${index+1}` : index+1}</h4>
                <h4 className="services__item-title">{service.title}</h4>
                <p className="services__item-content">{service.content}</p>
                <button
                  className={`services__item-button ${activeService === index ? 'services__item-button--less' : ''}`}
                  disabled={activeService === index && !isMobile}
                  onClick={() => handleServiceClick(index)}
                >
                  {isMobile && activeService !== null && activeService === index ? 'Saiba menos' : 'Saiba mais'}
                </button>
                {isMobile && activeService !== null && activeService === index && (
                  <div className="services__item-content services__item-content--mobile">
                    {servicos[activeService].extra.map((extra, index) => (
                      <p key={index}>{extra}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;