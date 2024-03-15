// Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

console.log(cart)

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

console.log(cart)

console.log(cart)