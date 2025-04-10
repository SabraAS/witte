import Activity from "../activity";
const ActivityAreas = () => {
  return (
    <section className="activity-areas">
      <h3 className="activity-areas__title">Áreas de atuação</h3>
      <div className="activity-areas__texts">
        <p className="activity-areas__text activity-areas__text--big">
          Nossa expertise a serviço da sua empresa
        </p>
        <div className="activity-areas__texts activity-areas__texts--inverted">
          <p className="activity-areas__text">
            <span className="activity-areas__text--bold">Empresas Strong-up</span>: Apoiamos negócios desde a sua fundação, expansão, M&A, rodadas de investimento e em toda a sua jornada.
          </p>
          <p className="activity-areas__text">
            Nossa missão é criar as condições para que sua empresa possa se desenvolver sobre uma base sólida, <span className="activity-areas__text--bold">porque &quot;Start&quot; é só o primeiro passo.</span> 
          </p>
        </div>
      </div>
      <div className="activity-areas__content activity-areas__content--first">
        <Activity icon={"/icon1.svg"} title="Da ideia ao primeiro real" content="Como um bebê em seus primeiros passos, é crucial primeiro analisar o mercado, verificando se há demanda e espaço para a solução proposta; em seguida, conhecer profundamente o público-alvo; aprender com erros (cair e levantar), analisar concorrentes e benchmarking para aprimorar ofertas existentes; garantir a sustentabilidade financeira com um modelo de receita sólido é indispensável e, por fim, paixão e dedicação para correr para o abraço!" />
        <Activity icon={"/icon2.svg"} title="Do primeiro ano ao primeiro milhão" content="Validar o modelo de negócio. conquistar os primeiros clientes, estruturar a empresa para o crescimento, captar recursos financeiros de forma estratégica, buscar feedback para ajustar e escalar a oferta e evitar conflitos internos são os grandes desafios do primeiro ano. Saber equilibrar crescimento sustentável com aprendizado contínuo, sempre atento às necessidades da empresa, da equipe e do mercado é crucial para o sucesso." />
      </div>
      <div className="activity-areas__content">
        <Activity icon={"/icon3.svg"} title="Rumo à maturidade" content="Empreendedor que pensa no longo prazo costrói empresa para durar. Está cada vez mais claro que mesmo as startups mais promissoras vêm evitando a todo custo abrir seu capital temendo a cobrança de curto prazo. Por isso, o movimento de investidores focados no longo prazo pode contribuir muito para o crescimento e fortalecimento das empresas. A mudança sugere uma possível era de investimentos mais alinhados ao crescimento sustentável." />
        <Activity icon={"/icon4.svg"} title="Exits" content="O 'exit' financeiro é um objetivo central para startups e seus investidores. Cada alternativa tem implicações distintas: aquisições podem trazer sinergias estratégicas, enquanto os fundos de private equity e venture capital ou IPOs podem abrir novas fontes de capital, mas também expor a empresa à pressão por resultados rápidos, o que pode conflitar com seu crescimento sustentável. Uma estratégia bem-sucedida de 'exit' exige planejamento cuidadoso, alinhamento entre fundadores e investidores, e a escolha do momento ideal, garantindo que tanto a valorização do negócio quanto as expectativas financeiras sejam atendidas." />
      </div>
    </section>
  );
};

export default ActivityAreas;