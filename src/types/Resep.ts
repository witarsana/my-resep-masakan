export enum Dificult {
  MUDAH = "Mudah",
  CUKUP_RUMIT = "Cukup Rumit",
  RUMIT = "RUMIT",
}

export interface Author {
  user: string;
  datePublished: string;
}

export interface Need {
  item_name: string;
  thumb_item: string;
}

export interface Masakan {
  title: string;
  thumb: string;
  key: string;
  times: string;
  portion: string;
  dificulty: Dificult;
}

export interface DetilMasakan {
  title: string;
  thumb: string;
  servings: string;
  times: string;
  dificulty: Dificult;
  author: Author;
  desc: string;
  needItem: Need[];
  ingredient: string[];
  step: string[];
}

export interface KategoriResep {
  category: string;
  url: string;
  key: string;
}
