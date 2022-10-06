
export const sortItems = (items: any, sortBy: string) => {
  switch (sortBy) {
    case "expensive":
      return items.sort((item1: any, item2: any) => item2.price - item1.price);
    case "cheap":
      return items.sort((item1: any, item2: any) => item1.price - item2.price);
    default:
      return items;
  }
};

export const filterItems = (items: any, filter: string) =>
  items.filter((item: any) => filter === "All" ? item : item.type === filter);

