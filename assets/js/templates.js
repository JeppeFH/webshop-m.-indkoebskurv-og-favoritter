// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  ` <div class="product">
      <p class="title">${product.title}</p>
      <img src="${product.image}">
      <div>
      <p>${product.price} kr.</p> 
      <a class="buyBtn" href="page.html?id=${product.id}">Se Produkt</a>
      <a class="favBtn" id="${product.id}"><i class="fa-regular fa-bookmark"></i></a>
     
  <div>
      </div>
  `;

export const productPageTmpl = (product) =>
  `   <div class="product-left">
      <h3>${product.title}</h3>
      <p class="price">Fra ${product.price} kr</p>
      <img src="${product.image}">
      </div>

      <div class="product-right">
      <p class="description">${product.description}</p>
      <div class="specs">
      <p>Processor: ${product.processor}</p>
      <p>Hukommelse: ${product.memory}</p>
      <p>Lagerplads: ${product.storage}</p>
      <p>Skærm: ${product.display}</p>
      <p>Kamera: ${product.camera}</p>
      <p>Batteritid: ${product.battery_life}</p>
      </div>

      
      <div class="colorways">
        <figure class="colorway gradient-1"></figure>
        <figure class="colorway gradient-2"></figure>
        <figure class="colorway gradient-3"></figure>
        <figure class="colorway gradient-4"></figure>
        <figure class="colorway gradient-5"></figure>
      </div>

      <div class=quantity>
        <figure class="minus">-</figure>
        <label class="quantity-number">${product.amount}</label>
        <figure class="plus">+</figure>
      </div>

      <button class="addToBasket" id="${product.id}">Tilføj til kurven</button>
      
      <div class="basketPopup">
      <p>Du har tilføjet ${product.title} til din kurv</p>
      <a class="GoToBasket" href="basket.html">Gå til kurven</a>
      <button class="continueShopping">Forsæt med at shoppe</button>
      </div>

      </div>
  `;

export const favListTmpl = (product) =>
  `   
      <div class="favorites">
      <button class="removeBtn" id="${product.id}"><i class="fa-solid fa-xmark"></i></button>
      <img src="${product.image}">
      <div>
      <label>
      <p>${product.title}</p>
      <p>${product.price} kr</p>
      </label>
      <button class="buyBtn"><a href="page.html?id=${product.id}">Se Produkt</a></button> 
      </div>
      </div>
      `;

export const basketTmpl = (product) =>
  `   <div class="baskets">
              
              <img src="${product.image}">
              
              <p class="basketInfo">${product.basketInfo}</p>
              
              <div class="quantity">
              <figure class="plus">+</figure>
              <label class="quantity-number">${product.amount}</label>
              <figure class="minus">-</figure>
              </div>
            
              <div class= "basket-column">
              <p class="basketPrice">${product.price} kr</p>
              <p class="basketRights">${product.basketRights} kr</p>
              <button class="removeFromBasket">Fjern</button>
              </div>
              
            </div>
          `;
