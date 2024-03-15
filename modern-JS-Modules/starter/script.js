import {addToCart, cart} from './shoppingCart.js'

console.log('Importing module');

addToCart("iPhone", 2)

setTimeout(()=>{
    addToCart("Samsung", 1)
    console.log(cart)
}, 2000)

console.log(cart)
