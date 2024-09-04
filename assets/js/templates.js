// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  ` <div class="product">
      <p class="title">${product.title}</p>
      <img src="${product.image}">
      <div>
      <p>${product.price} kr.</p>
      <button class="buy"><a href="page.html?id=${product.id}">Køb</a></button>
      <button class="favBtn" id="${product.id}"><i class="fa-solid fa-heart"></i></button>
  <button class="BasketBtn" id="${product.id}"><i class="fa-solid fa-basket-shopping"></i></button> 
  <div>
      </div>
  `;

export const productPageTmpl = (product) =>
  `
      <h2>${product.title}</h2>
      <p><i>Fra ${product.price} kr</i></p>
      <img src="${product.image}${product.id}">
      <p>${product.description}</p>
      <button><a href="index.html">Tilbage</a></button> 
      <button class="favBtn" id="${product.id}"><i class="fa-solid fa-heart"></i></button>
      <button class="BasketBtn" id="${product.id}"><i class="fa-solid fa-basket-shopping"></i></button>
  <br>
  `;

export const favListTmpl = (product) =>
  `
      <p><b>${product.title}</b></p>
      <p><i>${product.price} kr</i></p>
      
      <button><a href="page.html?id=${product.id}">Se produkt</a></button> 
      <button class="removeBtn" id="${product.id}">Fjern fra favoritter <i class="fa-solid fa-heart"></i></button>
      <button class="BasketBtn" id="${product.id}"><i class="fa-solid fa-basket-shopping"></i></button> 
      `;
