export type TeaCategory = "Black" | "Green";

export type CatalogItem = {
  id: string;
  title: string;
  description: string;
  type: TeaCategory;
  price: number;
  img: string;
};
