// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  ` <div class="product">
      <p class="title">${product.title}</p>
      <img src="${product.image}">
      <div>
      <p>${product.price} kr.</p> 
      <button class="buy"><a href="page.html?id=${product.id}">Køb</a></button>  
      <button class="favBtn" id="${product.id}"><i class="fa-regular fa-bookmark"></i></button>
     
  <div>
      </div>
  `;

export const productPageTmpl = (product) =>
  `
      <h2>${product.title}</h2>
      <p><i>Fra ${product.price} kr</i></p>
      <img src="${product.image}">
      <p>${product.description}</p>
      <button><a href="index.html">Tilbage</a></button> 
      <button class="favBtn" id="${product.id}"><i class="fa-solid fa-heart"></i></button>
      <button class="BasketBtn" id="${product.id}"><i class="fa-solid fa-basket-shopping"></i></button>
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
      <button class="buy"><a href="page.html?id=${product.id}">Køb</a></button> 
      </div>
      </div>
      `;
