export type TeaCategory = "Black" | "Green";

export type ItemProps = {
  id: string;
  title: string;
  description: string;
  type: TeaCategory;
  price: number;
  img: string;
};

export type FuncModule = {
  increase: () => void;
  decrease: () => void;
  remove: () => void;
}

export type CardProps = {
  item: ItemProps;
  func: FuncModule;
  count: number
}
