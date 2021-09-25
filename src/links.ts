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
}

export const links: Link[] = [
  {
    name: "Fnac - Returnal-Ratchet",
    url: "https://www.fnac.pt/Bundle-P55-Standard-Returnal-Ratchet-Consola-Consola/a9139512",
    type: LinkType.FNAC,
  },
  {
    name: "Fnac - Spideman-Miles-Morales",
    url: "https://www.fnac.pt/PS5-Standard-Spideman-Miles-Morales-Sackboy-A-Big-Adventure-Consola-Consola/a9030118",
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
];
