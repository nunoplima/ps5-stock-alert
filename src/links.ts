export type Link = {
  name: string;
  url: string;
  dataDefaultAsin?: string;
  type: LinkType;
};

export enum LinkType {
  FNAC = "FNAC",
  MEDIAMARKT = "MEDIAMARKT",
  WORTEN = "WORTEN",
  REPLAY = "REPLAY",
  CORTE_INGLES = "CORTE_INGLES"
}

export const links: Link[] = [
  {
    name: "Fnac",
    url: "https://www.fnac.pt/Consola-Sony-PlayStation-5-Edicao-Standard-Consola-Consola/a8081172",
    type: LinkType.FNAC,
  },
  {
    name: "Media Markt",
    url: "https://mediamarkt.pt/products/consola-playstation-5",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Worten",
    url: "https://www.worten.pt/gaming/playstation/consolas/ps5/consola-ps5-825gb-7196053",
    type: LinkType.WORTEN,
  },
  {
    name: "Gaming Replay",
    url: "https://www.gamingreplay.com/pt/consolas-ps5/22026-consola-playstation-5-ps5-711719396604.html",
    type: LinkType.REPLAY,
  },
  {
    name: "El Corte Inglês",
    url: "https://www.elcorteingles.pt/gaming/A37046604-consola-playstation-5/",
    type: LinkType.CORTE_INGLES,
  },
];
