export type TeaCategory = "Black" | "Green";

export type ItemProps = {
  id: string;
  title: string;
  description: string;
  type: TeaCategory;
  price: number;
  img: string;
};
