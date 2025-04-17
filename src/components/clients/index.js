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
    url: "https://carta.com/blog/eshares-is-now-carta/"
  },
  {
    name: "WITSEED",
    logo: "/witseed.svg",
    url: "https://play.witseed.com/"
  },
  {
    name: "PSafe",
    logo: "/psafe.svg",
    url: "https://www.psafe.com/pt-br/"
  },
  {
    name: "SEBRAE",
    logo: "/sebrae.svg",
    url: "https://sebrae.com.br/sites/PortalSebrae/ufs/rj?codUf=20"
  },
  {
    name: "Growth Machine",
    logo: "/growthmachine.svg",
    url: "https://www.growthmachine.com.br/"
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
    url: "https://beepsaude.com.br/"
  },
  {
    name: "pinpeople",
    logo: "/pinpeople.svg",
    url: "https://pinpeople.com.br/"
  },
  {
    name: "max milhas",
    logo: "/maxmilhas.svg",
    url: "https://www.maxmilhas.com.br/"
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
  { name: "3ClicksRH",	url: "https://3clicksapp.com.br/"},
  { name: "3TT",	url: ""},
  { name: "Access Club",	url: "https://www.instagram.com/accessclub/?hl=pt"},
  { name: "Aentropico",	url: "https://www.f6s.com/company/aentropico"},
  { name: "AgroPocket",	url: "https://www.linkedin.com/company/agropocket/"},
  { name: "Aindatem",	url: ""},
  { name: "Akredito",	url: "https://www.akredito.com.br/"},
  { name: "ALSTRA",	url: "https://www.alstratech.com/pt-br"},
  { name: "Altafonte Brasil",	url: "https://www.altafonte.com/"},
  { name: "APP SISTEMAS",	url: "https://appsistemas.com.br/"},
  { name: "Aqua Power",	url: "https://aquapowerenergy.com/"},
  { name: "Arvore de Livros",	url: "https://www.arvore.com.br/"},
  { name: "Ataulfo",	url: ""},
  { name: "Athenas",	url: "https://www.athen.as/"},
  { name: "AureaRobotics",	url: "https://aurearobotics.com/"},
  { name: "Bagunça Box",	url: "https://www.instagram.com/baguncabox/"},
  { name: "BeInYou",	url: "https://beinyou.com.br/contato"},
  { name: "Benie",	url: "https://www.instagram.com/benie_saude/"},
  { name: "Bioca",	url: "https://bioca.eco/"},
  { name: "BK Motion",	url: ""},
  { name: "Black Bean",	url: "https://blackbean.tech/br/"},
  { name: "Blend Edu",	url: "https://www.blend-edu.com/"},
  { name: "Blocks",	url: "https://www.blocksrvt.com/pt/home"},
  { name: "Bloompa",	url: "https://gust.com/companies/bloompa"},
  { name: "BLW Brasil",	url: "https://www.blwbrasilapp.com.br/"},
  { name: "Bookstorming",	url: "https://catracalivre.com.br/carreira/bookstorming-plataforma-permite-financiamento-colaborativo-de-livros/"},
  { name: "Boomit",	url: "https://boomit.com.br/"},
  { name: "Brasil Construtor",	url: "https://www.brasilconstrutor.com/"},
  { name: "Brechó Stella",	url: "https://www.instagram.com/diga_xs/"},
  { name: "BV Dermatologia",	url: "https://bvdermatologia.com.br/"},
  { name: "Caipilé ",	url: "https://www.geladosgudi.com.br/"},
  { name: "Cãna",	url: "https://www.drinkcana.com/"},
  { name: "Cana Mais",	url: "https://www.linkedin.com/company/cana-mais/?originalSubdomain=br"},
  { name: "CarbonAir Energy",	url: "https://www.carbonairenergy.com.br/"},
  { name: "CarCheck",	url: "https://carcheckbrasil.com.br/home"},
  { name: "CardioPapers",	url: "https://alunos.cursoscardiopapers.com.br/"},
  { name: "Cativa Digital",	url: "https://cativa.digital/"},
  { name: "Cedre Consultoria",	url: "https://www.linkedin.com/company/cedre-consultoria/?originalSubdomain=br"},
  { name: "Celeiro Agro",	url: "https://www.celeiro.agr.br/"},
  { name: "Cervejaria 2 Cabeças",	url: "https://www.instagram.com/2cabecas/"},
  { name: "Cervejaria Ferdinander",	url: "https://www.ferdinander.com/home"},
  { name: "CIEDS",	url: "https://www.cieds.org.br/"},
  { name: "Clinica Blue Serviços Médicos",	url: ""},
  { name: "Cmov ",	url: "https://lp.cmov.com.br/"},
  { name: "Cogmo",	url: "https://cogmo.com.br/"},
  { name: "Colégio Faria Brito ",	url: "https://fariabrito.com.br/"},
  { name: "Configr",	url: "https://configr.com/"},
  { name: "Consulta Remédios",	url: "https://consultaremedios.com.br/"},
  { name: "ContaUm",	url: "https://www.instagram.com/contaumbr/"},
  { name: "Craques.com",	url: ""},
  { name: "Creative Card",	url: "https://www.creativecard.com.br/"},
  { name: "Crescer Saúde",	url: "https://grupocrescersaude.com/"},
  { name: "Criamia",	url: "https://criamia.com/"},
  { name: "Criança e Saúde ",	url: "https://www.criancaesaude.com/"},
  { name: "Cuponeria",	url: "https://www.cuponeria.com.br/"},
  { name: "Cyberlabs",	url: "https://cyberlabs.ai/"},
  { name: "D-MAP",	url: ""},
  { name: "D'Hire",	url: "https://www.linkedin.com/company/d'hire/?originalSubdomain=br"},
  { name: "Daktus ",	url: "https://daktus.com.br/"},
  { name: "Data Sprints",	url: "https://datasprints.com/"},
  { name: "Dattos ",	url: "https://www.dattos.com.br/"},
  { name: "Dfeat",	url: "https://dfeat.com/br"},
  { name: "Diario de Campo",	url: ""},
  { name: "DICTO Sistemas",	url: "https://dicto.com.br/"},
  { name: "Digifair ",	url: "https://www.instagram.com/digifair/"},
  { name: "Dinneer",	url: "https://smu.com.vc/oferta/dinneer"},
  { name: "Dokter",	url: "https://pt.linkedin.com/company/dokter"},
  { name: "Doninnha Delivery",	url: "https://www.instagram.com/explore/locations/523091194/donninha-gastronomia/?hl=pt-br"},
  { name: "Doroth",	url: "https://doroth.com.br/"},
  { name: "Dovizin",	url: "https://tiinside.com.br/15/04/2021/plataforma-dovizin-lanca-servico-de-aluguel-de-piscinas-no-brasil/"},
  { name: "E-indica",	url: ""},
  { name: "EasyAula",	url: "https://www.facebook.com/easyaula/"},
  { name: "Eduq ",	url: "https://eduqbrasil.com.br/"},
  { name: "EndoCalc",	url: "https://www.linkedin.com/company/endocalc"},
];

const otherClients2 = [
  { name: "EqSeed",	url: "https://eqseed.com/"},
  { name: "ERA Brasil",	url: "https://www.erabrazil.com/?lang=pt"},
  { name: "Estante Mágica",	url: "https://estantemagica.com.br/"},
  { name: "eStoks",	url: "https://www.facebook.com/estoks.reversa/?locale=pt_BR"},
  { name: "Estude Vendas",	url: "https://www.estudevendas.com.br/"},
  { name: "Estudio Maybe",	url: "https://www.linkedin.com/company/estudiomaybe/"},
  { name: "EVA ",	url: "https://evapeople.com.br/"},
  { name: "Even3",	url: "https://www.even3.com.br/"},
  { name: "Expresso Delivery",	url: "https://materiais.expressodelivery.com.br/"},
  { name: "Fanbase",	url: "https://fanbase.com.br/"},
  { name: "Farol Serviços",	url: "https://www.linkedin.com/company/farolservicos/"},
  { name: "Fasolti ",	url: "https://www.fasolti.com.br/"},
  { name: "Fastimage",	url: "https://www.meioemensagem.com.br/proxxima/arquivo/noticias/fastimage-e-novo-marketplace-para-fotografos-e-cinegrafistas"},
  { name: "Fercicle",	url: "https://www.instagram.com/fercicle/"},
  { name: "FOFUU",	url: "https://fofuuu.com/"},
  { name: "Foodse",	url: "https://foodse.com.br/"},
  { name: "Funmily Box",	url: "https://www.instagram.com/funmilybox/"},
  { name: "FURNAS",	url: "https://www.furnas.com.br/"},
  { name: "FUTURAINOVA",	url: "https://www.projetodraft.com/a-futura-inova-conecta-industrias-atacadistas-e-importadores-a-venda-direta-ao-consumidor/"},
  { name: "Gaiola",	url: ""},
  { name: "Gama Academy",	url: "https://www.linkedin.com/school/gama-academy/"},
  { name: "Gaudium",	url: "https://www.gaudium.global/"},
  { name: "GaussFleet",	url: "https://gaussfleet.com.br/pt/"},
  { name: "Gobooks",	url: "https://www.instagram.com/gobooks/"},
  { name: "Gocase",	url: "https://www.gocase.com.br/"},
  { name: "Good1 ",	url: "https://www.facebook.com/good1oficial/"},
  { name: "Graphene Ventures",	url: "https://graphenevc.com/"},
  { name: "GreenData",	url: "https://www.linkedin.com/company/greendatabr/"},
  { name: "Grocers ",	url: "https://www.grocers.io/"},
  { name: "Grupo Andina ",	url: ""},
  { name: "Grupo Fesa ",	url: "https://fesagroup.com/en/home/"},
  { name: "Gustavo Mota - M8X",	url: "https://www.gustavomota.com/"},
  { name: "Helpin",	url: "https://www.linkedin.com/company/helpin/?originalSubdomain=br"},
  { name: "Home Mortgage",	url: ""},
  { name: "HotelQuando",	url: "https://www.instagram.com/hotelquando/"},
  { name: "Hoyplan",	url: ""},
  { name: "Hub21 Advisors",	url: "https://br.linkedin.com/company/hub21-advisors"},
  { name: "Huge Inc.",	url: "https://www.hugeinc.com/"},
  { name: "Icaiu",	url: "https://www.icaiu.com.br/"},
  { name: "IClinic",	url: "https://iclinic.com.br/"},
  { name: "ICode",	url: ""},
  { name: "IE Intercâmbio",	url: "https://www.ie.com.br/"},
  { name: "IEG",	url: "https://ieg.com.br/"},
  { name: "Igluu",	url: "https://www.facebook.com/igluuu/"},
  { name: "Ilia",	url: "https://ilia.digital/en/"},
  { name: "IMPROVEFY",	url: "https://improvefy.com/"},
  { name: "INBEP",	url: "https://inforchannel.com.br/2018/01/09/aceleradora-health-angels-seleciona-inbep-para-parceria/"},
  { name: "Indeva",	url: "https://indeva.com.br/"},
  { name: "Insfor",	url: "https://www.linkedin.com/company/insfor/"},
  { name: "Instaquadros",	url: "https://www.techtudo.com.br/tudo-sobre/instaquadros/"},
  { name: "Inventos Digitais",	url: "https://br.linkedin.com/company/inventos-digitais"},
  { name: "IONS Innovation",	url: "https://prosas.com.br/empreendedores/23858?locale=en"},
  { name: "ISCANEO",	url: "https://main.d1uibb6zv5wdn7.amplifyapp.com/"},
  { name: "ITrip",	url: "https://www.mercadoeeventos.com.br/noticias/servicos/nova-ferramenta-do-itrip-permite-comparar-pacotes-turisticos-de-operadoras/"},
  { name: "ITS",	url: "https://itsrio.org/pt/home/"},
  { name: "Journelle",	url: "https://www.instagram.com/lutaliberti/"},
  { name: "Juditech",	url: "https://www.instagram.com/juditech.co/"},
  { name: "Junta Local",	url: "https://www.juntalocal.com/"},
  { name: "Jurishand",	url: "https://jurishand.com/"},
  { name: "Kaizen Inteligência",	url: "https://www.kaizencomercial.com.br/home"},
  { name: "Katalista",	url: "https://katalista.com/"},
  { name: "Kedzoh",	url: "https://www.linkedin.com/showcase/kedzoh---the-mobile-learning-experts/about/"},
  { name: "LAB Viagens",	url: "https://labturismo.com.br/"},
  { name: "Lavaí",	url: "https://lavai.com.vc/"},
  { name: "Lecionas",	url: "https://www.linkedin.com/company/lecionas/?originalSubdomain=br"},
  { name: "Legal Bot",	url: "https://legalbot.com.br/en"},
  { name: "LogBoxx",	url: "https://logboxx.com.br/"},
  { name: "loja 33e34",	url: "https://www.instagram.com/33e34.com.br/"},
  { name: "LookApp",	url: "https://www.lookapp.com.br/"},
  { name: "Mais Agência",	url: "https://www.linkedin.com/company/agencia-mais/?originalSubdomain=br"},
  { name: "MaisApp",	url: "https://www.maisapp.com.br/"},
  { name: "Manole Editora",	url: "https://www.manole.com.br/"},
  { name: "Melhor Pedaço",	url: "https://www.instagram.com/melhor.pedaco/"},
  { name: "Marchézinho",	url: "https://marchezinho.com/"},
];

const otherClients3 = [
  { name: "DC2C",	url: "https://www.linkedin.com/company/dc2c/?originalSubdomain=br"},
  { name: "TS Eletronic do Brasil",	url: "https://www.telesystembrasil.com.br/"},
  { name: "Tety",	url: "https://br.linkedin.com/company/tety-app"},
  { name: "The Hive",	url: "https://br.linkedin.com/company/the-hive-brasil"},
  { name: "Me.Casei",	url: "https://www.projetodraft.com/mecasei-com-uma-startup-para-ajudar-a-planejar-e-divulgar-casamentos/"},
  { name: "Medflow",	url: "https://medflowtech.com/"},
  { name: "Medshare",	url: "https://medshare.com.br/"},
  { name: "ComWork",	url: "https://www.comwork.com.br/"},
  { name: "Jornada Mima",	url: "https://jornadamima.com.br/"},
  { name: "Moccato",	url: "https://www.moccato.com.br/"},
  { name: "Monograme",	url: ""},
  { name: "Motim",	url: "https://www.instagram.com/motimbrew/"},
  { name: "Mox Digital – Rio.Futuro",	url: "https://www.moxdigital.com.br/"},
  { name: "MultiLedgers",	url: "https://multiledgers.com/"},
  { name: "ICSS Equipamentos de Pétroleo",	url: ""},
{ name: "Nave",	url: "https://www.instagram.com/somos.nave/"},
{ name: "Noah Smart City",	url: "https://noahsmartcity.com/"},
{ name: "Norte Ventures",	url: "https://norte.ventures/"},
{ name: "Octos",	url: "https://www.octos.ai/"},
{ name: "Oficialize",	url: "https://21212.com/companies/oficialize/"},
{ name: "Oito Aceleradora",	url: ""},
{ name: "Organomix",	url: "https://www.linkedin.com/company/organomix/?originalSubdomain=br"},
{ name: "Padarias Paineiras",	url: "https://www.instagram.com/paineirascafe/"},
{ name: "Baked Padaria",	url: "https://www.instagram.com/baked.padaria/"},
{ name: "Pagpop",	url: "https://pagpop.com.br/"},
{ name: "Batata Show",	url: "https://www.instagram.com/batatashowoficial/"},
{ name: "Paty Rocks",	url: "https://www.instagram.com/paty.rocks/"},
{ name: "Escola Eleva",	url: "https://www.escolaeleva.com.br/"},
{ name: "Paulee Cleantech",	url: "https://pauleecleantec.com/"},
{ name: "PiggyPeg",	url: "https://piggypeg.wixsite.com/piggypeg"},
{ name: "PebMed",	url: "https://pebmed.com.br/"},
{ name: "Delira - eSports",	url: ""},
{ name: "Livre.Digital",	url: "https://livre.digital/"},
{ name: "PepÚnico",	url: "http://www.pepunico.com.br/"},
{ name: "Petmedia",	url: "https://br.linkedin.com/company/petmedia?trk=ppro_cprof"},
{ name: "PetRoomie",	url: "https://www.instagram.com/petroomiebr/"},
{ name: "Pets & Friends",	url: "https://www.instagram.com/petsandfriends.com.br/"},
{ name: "Pismo",	url: "https://www.pismo.io/pt"},
{ name: "Pitaco",	url: "https://trampos.co/8208f8ac3d11b5589e4945c7cc5c3610?locale=pt-BR"},
{ name: "Pixel",	url: "http://www.pixel.com.br/"},
{ name: "Plataforma.Space",	url: "https://www.plataforma.space/"},
{ name: "Pluga",	url: "https://pluga.co/"},
{ name: "Polén ",	url: "https://www.brpolen.com.br/"},
{ name: "Polifania",	url: "https://www.polifonia.com.br/"},
{ name: "Positive Ventures",	url: "https://www.positive.ventures/"},
{ name: "Potencialize",	url: "https://potencialize.adm.br/"},
{ name: "Previne.Ai",	url: ""},
{ name: "Previsiown",	url: "https://previsiown.com/"},
{ name: "ProAuto Electric",	url: "https://proauto-electric.com/"},
{ name: "PropagueTV Network",	url: ""},
{ name: "Propense",	url: "https://www.artmed360.com.br/instituicao/propense"},
{ name: "Purifica",	url: "https://www.facebook.com/purifica.eco/?locale=pt_BR"},
{ name: "QG2 Consulting",	url: ""},
{ name: "QGX Pagamentos ",	url: "https://qgx.digital/"},
{ name: "Queremos!",	url: "https://www.queremos.com.br/"},
{ name: "QueroQuitar",	url: "https://www.queroquitar.com.br/"},
{ name: "Rafael Salmon - Codifique",	url: "https://codifique.com.br/"},
{ name: "Rancho Churrascada",	url: "https://ranchochurrascada.com.br/"},
{ name: "Rancho Rocha Rosa",	url: "https://www.instagram.com/rancho.rocha.rosa/"},
{ name: "Yes I Am Jeans",	url: "https://www.instagram.com/_ijeans_/"},
{ name: "Rastreamed",	url: ""},
{ name: "Razoom",	url: "https://trampos.co/razoom"},
{ name: "Rede Werner",	url: "https://wernercoiffeur.com.br/a-empresa/"},
{ name: "RediRedi",	url: "https://rediredi.com/br/"},
{ name: "ResolveAí",	url: "https://www.instagram.com/resolveai/"},
{ name: "RespondeAí",	url: "https://www.respondeai.com.br/"},
{ name: "Fanpulse",	url: "https://www.fanpulse.com.br/"},
{ name: "Plataforma CEU.social",	url: "https://www.instagram.com/ceu.social/"},
{ name: "Rio Criativo",	url: "https://www.instagram.com/rjcriativo/"},
{ name: "RioGen",	url: "https://www.riogen.com.br/"},
{ name: "IMZ Navegação",	url: "http://www.imzolet.com.br/"},
{ name: "Bass Advisory",	url: "https://bassadvisory.com.br/"},
{ name: "Rocketship",	url: "https://www.rocketship.ag/"},
{ name: "Zerezes",	url: "https://zerezes.com.br/"},
];

const otherClients4 = [
  { name: "Extreme Entertainement Sports",	url: ""},
  { name: "Rust Consultoria",	url: "https://www.rustcon.com.br/"},
  { name: "Sai do Papel",	url: "https://saidopapel.com.br/"},
  { name: "Saldo Coletivo",	url: ""},
  { name: "Sanstone",	url: "https://www.sanstone.com.br/"},
  { name: "School of Rock",	url: "https://www.schoolofrock.com.br/"},
  { name: "Selo Reserva",	url: "https://seloreserva.com.br/"},
  { name: "Sem Processo",	url: "https://www.semprocesso.com.br/"},
  { name: "MenuPontoCom",	url: ""},
  { name: "Set4you",	url: "https://startups.com.br/negocios/healthtech-setyou-capta-r-35-mi-para-vender-suas-vitaminas-personalizadas/"},
  { name: "Shifters",	url: "https://www.shifters.com.br/"},
  { name: "ShowApp",	url: "https://www.facebook.com/GetShowApp/"},
  { name: "Simpply",	url: ""},
  { name: "Site Sustentável",	url: "https://www.facebook.com/sitesustentavel/?locale=pt_BR"},
  { name: "Skillcert",	url: "https://skillcert.io/"},
  { name: "Sling Capital",	url: "https://slinghub.io/"},
  { name: "Smart Surgical",	url: "https://www.smartsurgical.com.br/"},
  { name: "Smarter Solutions",	url: "https://www.smartersolutions.com.br/"},
  { name: "Soocial.App",	url: ""},
  { name: "Startec",	url: "https://www.linkedin.com/company/startec-jobs"},
  { name: "Startup Farm",	url: "https://startup.farm/"},
  { name: "SUFLEX",	url: "https://www.suflex.com.br/"},
  { name: "Superela",	url: "https://www.superela.com/"},
  { name: "SuperFrete",	url: "https://superfrete.com/"},
  { name: "Superplayer",	url: "https://superplayer.company/"},
  { name: "Supersonic",	url: "https://www.supersonic.ag/quem-somos/"},
  { name: "Tá na Hora",	url: "https://www.linkedin.com/pulse/fundador-da-startup-ta-na-hora-%C3%A9-finalista-em-pr%C3%AAmio-roberta/"},
  { name: "Tagarela",	url: "https://www.linkedin.com/company/tagarela/?originalSubdomain=br"},
  { name: "Beco dos Livros",	url: "https://www.instagram.com/becodoslivrospoa/"},
  { name: "Target Solutions",	url: "https://www.targetso.com/seguranca-digital/"},
  { name: "Tatoo Zero Dor",	url: "https://www.instagram.com/tattoozerodor/"},
  { name: "Teads.Tv",	url: "https://www.teads.com/"},
  { name: "TELLLinks",	url: ""},
  { name: "Tenex",	url: "https://tenex.com.br/"},
  { name: "Coorte Seguros",	url: ""},
  { name: "Cognitivo",	url: "https://www.seudinheiro.com/2021/empresas/conheca-a-cognitivo-startup-focada-em-inteligencia-artificial-que-busca-ser-a-uber-dos-profissionais-de-tecnologia/"},
  { name: "Radar do Brás",	url: "https://radardobras.com.br/"},
  { name: "Tipster Trade",	url: "https://tipstertrade.com/"},
  { name: "Tô Verde",	url: ""},
  { name: "Toulon Nautica",	url: "https://www.toulonnautica.com/"},
  { name: "Traive",	url: "https://traivefinance.com/"},
  { name: "Trakto",	url: "https://trakto.io/"},
  { name: "Transfero",	url: "https://transfero.com/"},
  { name: "TravelShopper",	url: "https://www.panrotas.com.br/noticia-turismo/mercado/2015/10/startup-oferece-canal-de-compra-on-line-gratuito-conheca_119876.html"},
  { name: "Treebos",	url: "https://www.facebook.com/treebos/?locale=pt_BR"},
  { name: "Trinks",	url: "https://www.trinks.com/"},
  { name: "TROCATECH",	url: "https://www.trocatech.com.br/"},
  { name: "Tiferet",	url: "https://epicmolhos.com.br/"},
  { name: "UAM Cloud Associates LLC",	url: ""},
  { name: "Ultrahaus",	url: "https://ultrahaus.com/about-us/"},
  { name: "UNISUAM - Polen",	url: "https://hotsite.unisuam.edu.br/polen/"},
  { name: "UNObject",	url: "https://www.acesso.uno/"},
  { name: "UOMAN",	url: "https://www.uoman.com.br/"},
  { name: "UP Estate",	url: "https://www.upestate.com.br/"},
  { name: "FOODSE",	url: "https://foodse.com.br/"},
  { name: "Velanto",	url: ""},
  { name: "Venturini IP",	url: "https://www.venturini-ip.com/pt/home-portuguese/"},
  { name: "Vidalink",	url: "https://vidalink.com.br/"},
  { name: "Videolog",	url: "https://pt.wikipedia.org/wiki/Videolog.tv"},
  { name: "VOA Hotéis",	url: "https://www.voahoteis.com.br/"},
  { name: "VRZone",	url: "https://www.instagram.com/vrzonerio/"},
  { name: "Wegoout",	url: "https://wegoout.com.br/"},
  { name: "Wehelp",	url: "https://www.wehelpsoftware.com/pt-BR"},
  { name: "Wework",	url: "https://www.wework.com.br/"},
  { name: "Wpensar",	url: "https://wpensar.com.br/"},
  { name: "XJobs",	url: "https://www.linkedin.com/company/xjobsgh?trk=similar-pages"},
  { name: "Yaless",	url: ""},
  { name: "Yube.io",	url: "https://yube.com.br/"},
  { name: "YvY Brasil",	url: "https://yvybrasil.com/"},
  { name: "Zeeplo",	url: "https://zeeplo.com.br/"},
  { name: "Zehnk",	url: "https://blog.zehnk.com/"},
  { name: "Zipp",	url: "https://www.linkedin.com/company/zipp/?originalSubdomain=br"},
  { name: "Zoony",	url: "https://21212.com/blog/zoony-an-online-platform-connecting-students-with-their-dream-internships/"},
];

const Clients = () => {
  const [showMoreClients, setShowMoreClients] = useState(false);

  return (
    <section className="clients" id="clientes">
      <div className="clients__content">
        <h3 className="clients__title">Clientes</h3>
        <p className="clients__description">
          Mais de 300 empresas contam com a gente.
        </p>
        <div className="clients__items">
          {mainClients.map((client) => (
            <div className="clients__item" key={client.name}>
              <Image fill src={client.logo} alt={client.name} onClick={() => {
                  window.open(client.url, '_blank');
                }} />
            </div>
          ))}
        </div>
        <p className="clients__description clients__description--bottom">
          E muito mais
        </p>
        {showMoreClients && (
          <div className="clients__more-clients">
            <div className="clients__group">
              {otherClients1.map((client) => (
                <div className="clients__item" key={client.name}>
                  <a href={client.url} target="_blank" rel="noopener noreferrer">
                  {client.name}
                </a>
                </div>
              ))}
            </div>
            <div className="clients__group">
              {otherClients2.map((client) => (
                <div className="clients__item" key={client.name}>
                  <a href={client.url} target="_blank" rel="noopener noreferrer">
                    {client.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="clients__group">
              {otherClients3.map((client) => (
                <div className="clients__item" key={client.name}>
                  <a href={client.url} target="_blank" rel="noopener noreferrer">
                    {client.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="clients__group">
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
      </div>
    </section>
  );
};

export default Clients;