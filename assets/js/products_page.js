import { fetchProducts } from "./fetch_data.js";
import { productPageTmpl } from "./templates.js";

let products = await fetchProducts();

export function productsPage() {
  const productPageContainer = document.querySelector(
    ".product-page-container"
  );

  if (productPageContainer) {
    let search = location.search;
    let productID = new URLSearchParams(search).get("id");

    const findProduct = products.find((product) => product.id == productID);

    if (findProduct) {
      productPageContainer.innerHTML = productPageTmpl(findProduct);
      quantityControls();
      popup();
    }
  }

  function quantityControls() {
    const quantityContainer = document.querySelectorAll(".quantity");

    quantityContainer.forEach((e) => {
      const quantityNumber = e.querySelector(".quantity-number");
      const minusBtn = e.querySelector(".minus");
      const plusBtn = e.querySelector(".plus");

      let quantity = parseInt(quantityNumber.textContent, 10);

      function updateQuantity(newQuantity) {
        if (newQuantity < 1) {
          newQuantity = 1;
        }
        quantityNumber.textContent = newQuantity;
      }

      minusBtn.addEventListener("click", () => {
        quantity -= 1;
        updateQuantity(quantity);
      });

      plusBtn.addEventListener("click", () => {
        quantity += 1;
        updateQuantity(quantity);
      });
    });
  }

  /* Basket popup */
  function popup() {
    const addToBasketButtons = document.querySelectorAll(".addToBasket");

    addToBasketButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        const productPopup = btn.parentElement.querySelector(".basketPopup");

        // Show the popup for the clicked product
        productPopup.classList.add("active");

        // Optional: Automatically hide the popup after a few seconds
        setTimeout(() => {
          productPopup.classList.remove("active");
        }, 3000); // 3 seconds delay (or set your preferred delay)
      });
    });
  }
}
