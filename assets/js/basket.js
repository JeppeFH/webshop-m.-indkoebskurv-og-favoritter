import { fetchProducts } from "./fetch_data.js";
import { basketTmpl, totalPrice } from "./templates.js";

let products = await fetchProducts();

export function basket() {
  const basketContainer = document.querySelector(".basket-container");

  let basket = JSON.parse(localStorage.getItem("shoppingBasket")) || [];

  function renderbasket() {
    if (basketContainer) {
      if (basket.length != 0) {
        basketContainer.innerHTML = "";

        basket.forEach((product) => {
          basketContainer.insertAdjacentHTML("beforeend", basketTmpl(product));
        });
      } else {
        basketContainer.innerHTML = "Kurven er tom";
      }
    }

    /* Slet kurv-produkt */
    const basketRemoveBtn = document.querySelectorAll(".removeFromBasket");
    basketRemoveBtn.forEach((btn) => {
      btn.addEventListener("click", removeFromBasket);
    });
  }

  renderbasket();

  function addToBasket(e) {
    const productID = e.target.id;
    const productToAdd = products.find((product) => product.id == productID);
    console.log(productToAdd);

    const exist = basket.find((product) => product.id == productToAdd.id);

    if (!exist) {
      basket.push(productToAdd);

      localStorage.setItem("shoppingBasket", JSON.stringify(basket));

      renderbasket();

      triggerJumpAnimation();
    } else {
      console.log("Produktet er allerede tilføjet til kurv");
    }
  }

  const addBasket = document.querySelectorAll(".addToBasket");
  addBasket.forEach((product) => {
    product.addEventListener("click", addToBasket);
  });

  // Funktion for Keyframe animation
  /*  */
  function triggerJumpAnimation() {
    const basketLink = document.querySelector(".basket-link");

    if (basketLink) {
      basketLink.classList.toggle("jump-animation");
      void basketLink.offsetWidth;
    }
  }

  function removeFromBasket(e) {
    const productIdToRemove = e.target.id;
    const indexOfBasket = basket.findIndex(
      (product) => product.id == productIdToRemove
    );
    basket.splice(indexOfBasket, 1);

    localStorage.setItem("shoppingBasket", JSON.stringify(basket));

    renderbasket();

    if (basket.length == 0) {
      localStorage.removeItem("shoppingBasket");
    }
  }
}
