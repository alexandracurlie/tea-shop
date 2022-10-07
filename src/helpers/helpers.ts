import { CatalogItem } from '../types';

export const sortItems = (items: CatalogItem[], sortBy: string) => {
  switch (sortBy) {
    case "expensive":
      return items.sort((item1, item2) => item2.price - item1.price);
    case "cheap":
      return items.sort((item1, item2) => item1.price - item2.price);
    default:
      return items;
  }
};

export const filterItems = (items: CatalogItem[], filter: string) =>
  items.filter((item) => filter === "All" ? item : item.type === filter);

export const countItems = (items: CatalogItem[], id: string) => items.filter((good) => good.id === id).length;

export const getTotalPrice = (items: CatalogItem[]) => items.reduce((acc, item) => acc + item.price, 0);
