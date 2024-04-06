export const getColor = (color) => {
  switch (color) {
    case "fire":
      return "#FFA06F";

    case "water":
      return "#89AAE4";

    case "grass":
      return "#89D586";

    case "electric":
        return "#FACE57";
    
    case "normal":
        return "#B3B3B3";

    default:
      return "#010101";
  }
};
