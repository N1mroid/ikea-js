import { getData } from "./getData.js";

const wishlist = ["idd100", "idd056", "idd044", "idd077"];

const cartlist = [
  {
    id: "idd007",
    count: 7,
  },
  {
    id: "idd015",
    count: 14,
  },
  {
    id: "idd098",
    count: 245,
  },
];

export const loadData = () => {
  if (location.search) {
    const search = decodeURI(location.search);
    console.log(search);
    const prop = search.split("=")[0].substring(1);
    const value = search.split("=")[1];

    if (prop === "s") {
      console.log(value);
    } else if (prop === "wishlist") {
      console.log(wishlist);
    } else {
      console.log(prop, value);
    }
  }
  if (location.hash) {
    console.log(location.hash.substring(1));
  }
  if (location.pathname.includes("cart")) {
    console.log(cartlist);
  }
};
