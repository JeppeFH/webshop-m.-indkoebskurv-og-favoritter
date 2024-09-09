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
      ChoseColorway();
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

    addToBasketButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const productPopup = btn.parentElement.querySelector(".basketPopup");
        const progressBar = productPopup.querySelector(".progressPer");

        // først fjerner transition fra css og sætter width til 0 for at reset loaderen når der klikkes igen
        progressBar.style.transition = "none";
        progressBar.style.width = "0%";

        void progressBar.offsetWidth;

        // timer der animere loaderen
        setTimeout(() => {
          progressBar.style.transition = "width 8s linear"; // tilbagetilføjer transition css
          progressBar.style.width = "100%";
        }, 100);

        // aktivere popup container
        productPopup.classList.add("active");

        // fjerner popup efter tidsbestemmelse
        setTimeout(() => {
          productPopup.classList.remove("active");
        }, 8000);
      });
    });
  }

  function ChoseColorway() {
    const colorways = document.querySelectorAll(".colorway");
    const addBasket = document.querySelector(".addToBasket");
    const messageContainer = document.querySelector(".colorMessageWarning");

    let colorSelected = false;

    // Initially hide the message
    messageContainer.style.display = "none";

    colorways.forEach((color) => {
      color.addEventListener("click", () => {
        // Remove border from all colors
        colorways.forEach((e) => {
          e.style.border = "none";
        });

        // Add border to the clicked color
        color.style.border = "2px solid black";
        colorSelected = true;

        // Hide the message when a color is selected
        messageContainer.style.display = "none";
      });
    });

    addBasket.addEventListener("click", () => {
      if (!colorSelected) {
        messageContainer.textContent = "Vælg en farve"; // Show message if no color is selected
        messageContainer.style.display = "block";
      } else {
        // Proceed with adding the product to the basket
        // Your existing add to basket logic here
      }
    });
  }

  // Call the function when the document is ready
  document.addEventListener("DOMContentLoaded", ChoseColorway);
}
