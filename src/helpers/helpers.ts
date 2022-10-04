
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

export const catalog = [
  {
    id: "001",
    title: "Green Spikes",
    description: "light, delicate, floral notes",
    type: "Green",
    price: 4,
    img: "http://localhost:3000/catalog/1.webp"
  },

  {
    id: "002",
    title: "Oldman's face",
    description: "strong reach taste and aroma Shu pu-erh",
    type: "Black",
    price: 6,
    img: "http://localhost:3000/catalog/2.webp"
  },
  {
    id: "003",
    title: "Biggie Red",
    description: "highly fermented oolong with a unique aroma and flavor",
    type: "Black",
    price: 4,
    img: "http://localhost:3000/catalog/3.webp"
  },
  {
    id: "004",
    title: "Golden Bird",
    description: "the most delicate taste of honey, vanilla and fruits",
    type: "Green",
    price: 5,
    img: "http://localhost:3000/catalog/4.webp"
  },
  {
    id: "005",
    title: "Smoky Bush",
    description: "delicate taste of the tea with dried fruits and wood with a shade of smokes",
    type: "Green",
    price: 4,
    img: "http://localhost:3000/catalog/5.webp"
  },
  {
    id: "006",
    title: "Dragon Pearl",
    description: "delicate jasmine aroma with a sweetish taste of berries and flowers",
    type: "Green",
    price: 6,
    img: "http://localhost:3000/catalog/6.webp"
  },
  {
    id: "007",
    title: "Wild Billy",
    description: "caramel and nuts aroma",
    type: "Black",
    price: 3,
    img: "http://localhost:3000/catalog/7.webp"
  },
  {
    id: "008",
    title: "Peach Oolong",
    description: "rich and fresh taste with sweet peach aroma",
    type: "Green",
    price: 5,
    img: "http://localhost:3000/catalog/8.webp"
  },
  {
    id: "009",
    title: "Cleo",
    description: "fruit and floral aroma",
    type: "Black",
    price: 3,
    img: "http://localhost:3000/catalog/9.webp"
  },
  {
    id: "010",
    title: "Shogun",
    description: "astringent, intense, rich aroma with strawberry",
    type: "Green",
    price: 4,
    img: "http://localhost:3000/catalog/10.webp"
  },
  // {
  //   "id": "011",
  //   "title": "Running Forest",
  //   "description": "green oolong with jasmin, rose and cherry",
  //   "type": "Green",
  //   "price": 6,
  //   img: "http://localhost:3000/data.json/catalog/11.webp"
  // },
  // {
  //   "id": "012",
  //   "title": "Nara",
  //   "description": "japanese fresh floral green tea with mint",
  //   "type": "Green",
  //   "price": 4,
  //   img: "http://localhost:3000/data.json/catalog/12.webp"
  // },
  // {
  //   "id": "013",
  //   "title": "Osmanthus",
  //   "description": "osmanthus and daylily",
  //   "type": "Green",
  //   "price": 6,
  //   img: "http://localhost:3000/data.json/catalog/13.webp"
  // },
  // {
  //   "id": "014",
  //   "title": "Wonder Molly",
  //   "description": "sweet pure taste combines the floral shades",
  //   "type": "Black",
  //   "price": 4,
  //   img: "http://localhost:3000/data.json/catalog/14.webp"
  // },
  // {
  //   "id": "015",
  //   "title": "Not Noodles",
  //   "description": "spicy biscuit flavor with chocolate, dried fruits, cranberries and juniper",
  //   "type": "Black",
  //   "price": 5,
  //   "img": "http://localhost:3000/data.json/catalog/15.webp"
  // }]}
  //

];

