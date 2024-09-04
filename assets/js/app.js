import { productsList } from "./products_list.js";
import { productsPage } from "./products_page.js";
import { favorites } from "./favorites.js";
import { basket } from "./basket.js";

const app = {};

app.init = async () => {
  productsList();
  productsPage();
  favorites();
  basket();
};

app.init();
