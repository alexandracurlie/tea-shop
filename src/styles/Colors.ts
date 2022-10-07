export const Colors = {
  white: "#ffffff",
  snow: "#f0f0f7",
  dust: "#c8c8c8",
  gray: "#9f9f9f",
  tea: "#91a4a2",
  green: "#446865",
  pink: "#955469",
  black: "#212121",
  cloud: "rgba(55, 84, 170, 0.15)",
}

export const Shadows = {
  in: `-3px -2px 4px white inset, 3px 2px 4px ${Colors.cloud} inset`,
  out: `-3px -2px 4px white, 3px 2px 4px ${Colors.cloud}`,
  card: `4px 4px 6px ${Colors.cloud}`,
}

export const Gradients = {
  green: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(8, 101, 60, 1) 54%, rgba(204, 226, 204, 1) 100%)",
  brown: "linear-gradient(90deg, rgba(36, 0, 0, 1) 0%, rgba(134, 118, 100, 1) 34%, rgba(145, 164, 162, 1) 66%",
}
