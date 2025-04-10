import { useState } from "react";
import Image from 'next/image';

const mainClients = [
  {
    name: "21212",
    logo: "/21212.svg",
    url: "https://21212.com/"
  },
  {
    name: "carta",
    logo: "/carta.svg",
    url: "https://carta.com.br/"
  },
  {
    name: "WITSEED",
    logo: "/witseed.svg",
    url: "https://witseed.com/"
  },
  {
    name: "PSafe",
    logo: "/psafe.svg",
    url: "https://www.psafe.com/pt-br/"
  },
  {
    name: "SEBRAE",
    logo: "/sebrae.svg",
    url: "https://sebrae.com.br/"
  },
  {
    name: "Growth Machine",
    logo: "/growthmachine.svg",
    url: "https://growthmachine.com.br/"
  },
  {
    name: "Salú",
    logo: "/salu.svg",
    url: "https://salu.com.vc/"
  },
  {
    name: "intuit quickbooks",
    logo: "/intuitquickbooks.svg",
    url: "https://quickbooks.intuit.com/br/"
  },
  {
    name: "beep",
    logo: "/beep.svg",
    url: "https://beep.com.br/"
  },
  {
    name: "pinpeople",
    logo: "/pinpeople.svg",
    url: "https://pinpeople.com.br/"
  },
  {
    name: "max milhas",
    logo: "/maxmilhas.svg",
    url: "https://maxmilhas.com.br/"
  },
  {
    name: "Memed",
    logo: "/memed.svg",
    url: "https://memed.com.br/"
  },
  {
    name: "We Do Logos",
    logo: "/wedologos.svg",
    url: "https://wedologos.com.br/"
  },
  {
    name: "Sua Música",
    logo: "/suamusica.svg",
    url: "https://suamusica.com.br/"
  },
  {
    name: "Vetsmart",
    logo: "/vetsmart.svg",
    url: "https://vetsmart.com.br/"
  },
  {
    name: "LEVERPRO",
    logo: "/leverpro.svg",
    url: "https://leverpro.com.br/"
  }
];

const otherClients1 = [
  { name: "21212 Academy", url: "https://academy.21212.com/" },
  { name: "21212", url: "https://21212.com/" },
  { name: "33e 34", url: "https://www.33e34.com.br/" },
  { name: "Altafonte", url: "https://www.altafonte.com/pt-pt/" },
  { name: "Access Club", url: "" },
  { name: "AgroPocket", url: "https://agropocket.com.br/" },
  { name: "Aentropico", url: "https://aentropico.com.br/" },
  { name: "Aindatem", url: "https://aindatem.com.br/" },
  { name: "Akredito", url: "https://akredito.com.br/" },
  { name: "Arvore de Livros", url: "https://www.arvore.com.br/" },
  { name: "Athenas", url: "https://athen.as/pt-BR/tos+" },
  { name: "Bagunça Box", url: "https://baguncabox.com.br/" },
  { name: "Beep Saúde", url: "https://beep.com.br/" },
  { name: "Black Bean", url: "https://blackbean.com.br/" },
  { name: "Bloompa", url: "" },
  { name: "Bookstorming", url: "" },
  { name: "Boomit", url: "https://boomit.com.br/" },
  { name: "Brasil Construtor", url: "https://brasilconstrutor.com/" },
  { name: "Brechó Stella", url: "" },
  { name: "Caipilé Caipilé", url: "https://caipilecaipile.com.br/" },
  { name: "CarCheck", url: "https://carcheck.com.br/" },
  { name: "Cervejaria 2 Cabeças", url: "https://www.2cabecas.com.br/" },
  { name: "Cervejaria Ferdinander", url: "https://www.ferdinander.com/" },
  { name: "CMov", url: "https://cmov.com.br/" },
  { name: "Configr", url: "https://configr.com.br/" },
  { name: "Consulta Remédios", url: "https://consultaremedios.com.br/" },
  { name: "ContaUm", url: "https://contaum.com.br/" },
  { name: "Craques.com", url: "" },
  { name: "Cuponeria", url: "https://cuponeria.com.br/" },
];

const otherClients2 = [
  { name: "Cyberlabs", url: "https://cyberlabs.ai/" },
  { name: "D´Hire", url: "https://dhire.com.br/" },
  { name: "Diario de Campo", url: "https://diariodecampo.com.br/" },
  { name: "Dinneer Dinneer", url: "https://dinneer.com.br/" },
  { name: "Dokter", url: "https://dokter.com.br/" },
  { name: "Donninha Delivery", url: "https://donninhadelivery.com.br/home" },
  { name: "EasyAula", url: "" },
  { name: "eShares", url: "https://eshares.com.br/" },
  { name: "eStoks", url: "https://estoks.com.br/" },
  { name: "E-indica", url: "" },
  { name: "Even3", url: "https://even3.com.br/" },
  { name: "Falsoti", url: "" },
  { name: "FastImage", url: "https://fastimage.com.br/" },
  { name: "Fofuuu", url: "https://fofuuu.com.br/" },
  { name: "Foodse", url: "https://foodse.com.br/" },
  { name: "Funmily", url: "https://www.funmilybox.com/" },
  { name: "Gama Academy", url: "https://www.onelearning.com.br/" },
  { name: "Gaiola", url: "" },
  { name: "Gaudium", url: "https://gaudium.com.br/" },
  { name: "Gobooks", url: "" },
  { name: "Helpin", url: "" },
  { name: "HotelQuando", url: "https://hotelquando.com/" },
  { name: "Huge Inc.", url: "https://hugeinc.com/" },
  { name: "Icaiu", url: "https://icaiu.com.br/" },
  { name: "IClinic", url: "https://iclinic.com.br/" },
  { name: "Icode", url: "" },
  { name: "IEG", url: "https://ieg.com.br/loja/" },
  { name: "Igluu", url: "" },
  { name: "INBEP", url: "https://inbep.com.br/" },
];

const otherClients3 = [
  { name: "Instaquadros", url: "https://instaquadros.com.br/" },
  { name: "Inventos Digitais", url: "https://inventosdigitais.com.br/" },
  { name: "Indeva", url: "https://indeva.com.br/" },
  { name: "INSFOR", url: "https://www.insfor.com/home/" },
  { name: "ITrip", url: "" },
  { name: "Junta Local", url: "https://juntalocal.com.br/" },
  { name: "LAB Viagens", url: "" },
  { name: "Legal Bot", url: "https://legalbot.com.br/" },
  { name: "MaxMilhas", url: "https://maxmilhas.com.br/" },
  { name: "Mecasei", url: "https://casamento.wedy.com/" },
  { name: "Memed", url: "https://memed.com.br/" },
  { name: "Tagarela", url: "https://tagarela.co/" },
  { name: "Moccato", url: "https://moccato.com.br/" },
  { name: "Monograme", url: "https://monogra.me/"    },
  { name: "Motim", url: "https://www.facebook.com/motimbrew" },
  { name: "Mox Digital – Rio.Futuro", url: "https://riofuturo.com/" },
  { name: "Oficialize", url: "https://oficialize.com.br/" },
  { name: "Pagpop", url: "https://pagpop.com.br/" },
  { name: "Paty Rocks", url: "https://patyrocks.com/" },
  { name: "Pismo", url: "https://www.pismo.io/" },
  { name: "Plah! Tecnologia", url: "https://plah.com.br/" },
  { name: "Plataforma.Space", url: "https://www.plataforma.space/" },
  { name: "PebMed", url: "https://pebmed.com.br/" },
  { name: "PetMedia", url: "https://petmedia.pet/" },
  { name: "PetRoomie", url: "https://petroomie.com.br/" },
  { name: "PepÚnico", url: "https://pepunico.com.br/" },
  { name: "Polén", url: "https://www.brpolen.com.br/" },
  { name: "Pluga.co", url: "https://pluga.co/" },
  { name: "Queremos!", url: "https://queremos.com.br/" },
  { name: "QueroQuitar", url: "https://queroquitar.com.br/" },
];

const otherClients4 = [
  { name: "QG2 Consulting", url: "https://qg2.com.br/" },
  { name: "Razoom", url: "https://razoom.com.br/" },
  { name: "Rede Cotação", url: "https://www.dicto.com.br/dicto.html" },
  { name: "Rustcon", url: "https://rustcon.com.br/" },
  { name: "Hub21", url: "https://hub21.com.br/" },
  { name: "ResolveAí", url: "https://resolveai.com.br/" },
  { name: "RespondeAí", url: "https://respondeai.com.br/" },
  { name: "Sai do Papel", url: "https://saidopapel.com.br/" },
  { name: "Saldo Coletivo", url: "" },
  { name: "Selo Reserva", url: "https://seloreserva.com.br/" },
  { name: "Sem Processo", url: "https://semprocesso.com.br/" },
  { name: "ShowApp", url: "https://br.getshowapp.com/" },
  { name: "Simpply", url: "" },
  { name: "Site Sustentável", url: "https://sitesustentavel.com.br/" },
  { name: "Superela", url: "https://superela.com/" },
  { name: "Superplayer", url: "https://www.superplayer.fm/player" },
  { name: "Supersonic", url: "https://www.gosupersonic.com.br/" },
  { name: "TELLL", url: "" },
  { name: "Tá na Hora", url: "https://tnh.health/pt" },
  { name: "VetSmart", url: "https://vetsmart.com.br/" },
  { name: "Vidalink", url: "https://vidalink.com.br/" },
  { name: "Videolog", url: "" },
  { name: "Wedologos", url: "https://wedologos.com.br/" },
  { name: "Witseed", url: "https://witseed.com/" },
  { name: "XJobs", url: "" },
  { name: "Yaless", url: "" },
  { name: "Yube.io", url: "https://yube.com.br/" },
  { name: "ZEHNK", url: "https://zehnk.com/" },
  { name: "Zeropaper", url: "https://quickbooks.intuit.com/br/" },
  { name: "ZippClub", url: "https://zippclub.com/" },
  { name: "Zoony", url: "https://zoony.com.br/" }
];

const Clients = () => {
  const [showMoreClients, setShowMoreClients] = useState(false);

  return (
    <section className="clients" id="clientes">
      <h3 className="clients__title">Clientes</h3>
      <p className="clients__text">
        Mais de 300 empresas contam com a gente.
      </p>
      <div className="clients__content">
        {mainClients.map((client) => (
          <div className="clients__item" key={client.name}>
            <Image fill src={client.logo} alt={client.name} onClick={() => {
                window.open(client.url, '_blank');
              }} />
          </div>
        ))}
      </div>
      <p className="clients__text clients__text--bottom">
        E muito mais
      </p>
      {showMoreClients && (
        <div className="clients__more-clients">
          <div className="clients__more-clients__group">
            {otherClients1.map((client) => (
              <div className="clients__item" key={client.name}>
                <a href={client.url} target="_blank" rel="noopener noreferrer">
                {client.name}
              </a>
              </div>
            ))}
          </div>
          <div className="clients__more-clients__group">
            {otherClients2.map((client) => (
              <div className="clients__item" key={client.name}>
                <a href={client.url} target="_blank" rel="noopener noreferrer">
                  {client.name}
                </a>
              </div>
            ))}
          </div>
          <div className="clients__more-clients__group">
            {otherClients3.map((client) => (
              <div className="clients__item" key={client.name}>
                <a href={client.url} target="_blank" rel="noopener noreferrer">
                  {client.name}
                </a>
              </div>
            ))}
          </div>
          <div className="clients__more-clients__group">
            {otherClients4.map((client) => (
              <div className="clients__item" key={client.name}>
                <a href={client.url} target="_blank" rel="noopener noreferrer">
                  {client.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      <button className="clients__button" onClick={() => setShowMoreClients(!showMoreClients)}>{showMoreClients ? "Ver menos" : "Conheça"}</button>
    </section>
  );
};

export default Clients;