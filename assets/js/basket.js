import { fetchProducts } from "./fetch_data.js";
import { basketTmpl } from "./templates.js";

let products = await fetchProducts();

export function basket() {
  const basketContainer = document.querySelector(".basket-container");
  const totalPriceContainer = document.querySelector(".totalPriceContainer");

  let basket = JSON.parse(localStorage.getItem("shoppingBasket")) || [];

  function renderbasket() {
    if (basketContainer) {
      if (basket.length != 0) {
        basketContainer.innerHTML = "";

        basket.forEach((product) => {
          basketContainer.insertAdjacentHTML("beforeend", basketTmpl(product));
        });

        /* Antal-funktion bliver kaldt */
        quantity();

        /* Totalpris-funktion bliver kaldt */
        totalPrice();
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

  /* antal (quantity) funktion */
  function quantity() {
    const plusBtn = document.querySelectorAll(".plus");
    const minusBtn = document.querySelectorAll(".minus");
    const quantityLabel = document.querySelectorAll(".quantity-number");
    let basketPrice = document.querySelectorAll(".basketPrice");

    plusBtn.forEach((plus, index) => {
      plus.addEventListener("click", () => {
        basket[index].amount++; //Plusser antal

        //Opdatere antal-label til det antal man plusser med
        quantityLabel[index].textContent = basket[index].amount;

        //Opdatere prisen ift. antallet
        const amountPrice = basket[index].amount * basket[index].price;
        basketPrice[index].textContent = `${amountPrice} kr`;

        localStorage.setItem("shoppingBasket", JSON.stringify(basket));
        renderBasket();
        totalPrice(); // Opdater totalprisen ved ændringer
      });
    });

    minusBtn.forEach((minus, index) => {
      minus.addEventListener("click", () => {
        if (basket[index].amount > 1) {
          basket[index].amount--;
        } else {
          // fjerner produkt hvis under 1
          basket.splice(index, 1);
        }

        //Opdatere antal-label til det antal man minusser med
        quantityLabel[index].textContent = basket[index]?.amount || 0;

        //Opdatere prisen ift. antallet
        if (basket[index]) {
          const amountPrice = basket[index].amount * basket[index].price;
          basketPrice[index].textContent = `${amountPrice} kr`;
        }

        localStorage.setItem("shoppingBasket", JSON.stringify(basket));
        renderBasket();
      });
    });
  }

  /*funktion totalpris */
  function totalPrice() {
    // Find pris-elementet i DOM'en
    let priceElement = document.querySelector(".price");

    // Beregn den samlede pris ved at loope igennem produkterne i kurven
    let totalPrice = basket.reduce((acc, product) => {
      return acc + product.amount * product.price;
    }, 0);

    // Opdater pris-elementet med den samlede pris
    priceElement.textContent = `${totalPrice} kr.`;
  }
}
