// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  ` <div class="product">
      <p class="title">${product.title}</p>
      <img src="${product.image}">
      <div>
      <p>${product.price} kr.</p> 
      <button class="buyBtn"><a href="page.html?id=${product.id}">Se Produkt</a></button>  
      <button class="favBtn" id="${product.id}"><i class="fa-regular fa-bookmark"></i></button>
     
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
      <div class="colorways">
        <figure class="colorway gradient-1"></figure>
        <figure class="colorway gradient-2"></figure>
        <figure class="colorway gradient-3"></figure>
        <figure class="colorway gradient-4"></figure>
        <figure class="colorway gradient-5"></figure>
      </div>

    <div class=amount>
<figure class="plus">+</figure>
<label class="amount-number"></figure>
<figure class="minus">-</figure>
</div>

</div>


      
      <button class="addToBasket" >Tilføj til kurven</button>
      </div>
  `;

export const basketTmpl = (product) =>
  `
        <h2>${product.title}</h2>
        <p><i>Fra ${product.price} kr</i></p>
        <img src="${product.image}">
        <p>${product.description}</p>
        <button class="addToBasket" >Tilføj til kurven</button>
        <button class="removeFromBasket">Tilføj til kurven</button>
        
        
    <br>
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
