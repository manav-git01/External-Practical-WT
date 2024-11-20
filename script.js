const apiUrl = 'https://fakestoreapi.com/products';
let productsData = [];
document.addEventListener("DOMContentLoaded", function() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      productsData = data;
      displayProducts(data);
    });
  document.getElementById('priceRange').addEventListener('input', function() {
    const value = this.value;
    document.getElementById('priceValue').textContent = `0 - ${value}`;
  });
});
function displayProducts(products) {
  const productsList = document.getElementById('productsList');
  productsList.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h4>${product.title}</h4>
      <p>${product.description.substring(0, 50)}...</p>
      <p>$${product.price}</p>
    `;
    productsList.appendChild(productCard);
  });
}