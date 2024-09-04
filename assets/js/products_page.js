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
      initializeQuantityControls();
    }
  }

  function initializeQuantityControls() {
    // Select quantity controls for the current product page
    const quantityContainer = document.querySelectorAll(".quantity");

    quantityContainer.forEach((control) => {
      const quantityNumber = control.querySelector(".quantity-number");
      const minusBtn = control.querySelector(".minus");
      const plusBtn = control.querySelector(".plus");

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
}
