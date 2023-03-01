import intialProducts from "./api/products.json";
import { addToCart, checkout } from "./actions";
import { getState, subscribe } from "./store";

import "./index.css";

subscribe(() => {
  const cartProducts = getState().products;

  console.log(getState().products);
  const cart = document.getElementById("cart");

  cartProducts.forEach((product) => {
    if (product.inCart !== 0) {
      let cartelem = document.getElementById(`cartelem-${product.id}`);

      if (!cartelem) {
        cartelem = document.createElement("div");
        cartelem.id = `cartelem-${product.id}`;
      }

      cartelem.innerText = `${product.title} - $${product.price} quantity: ${product.inCart}`;

      cart.appendChild(cartelem);
    } else {
      let cartelem = document.getElementById(`cartelem-${product.id}`);
      cartelem.remove();
    }

    if (document.getElementById(`productelem-${product.id}`)) {
      const productElem = document.getElementById(`productelem-${product.id}`);
      productElem.innerText = `${product.title} - $${product.price}${
        product.inventory ? ` x ${product.inventory}` : null
      }`;
    }

  });
});

const productsDiv = document.getElementById("products");

//creating first products
intialProducts.forEach((product) => {
  const textDiv = document.createElement("div");
  textDiv.id = `productelem-${product.id}`;

  textDiv.append(
    `${product.title} - $${product.price}${
      product.inventory ? ` x ${product.inventory}` : null
    }`
  );
  const buttonAddToCart = document.createElement("button");

  buttonAddToCart.className =
    "p-2 text-stone-100 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300";
  buttonAddToCart.textContent = "Add to cart";

  buttonAddToCart.id = product.id;
  productsDiv.appendChild(textDiv);
  productsDiv.appendChild(buttonAddToCart);
});

document
  .getElementById("products")
  .addEventListener("click", handleButtonClicked);

function handleButtonClicked(event) {
  addToCart(event.target.id);
}

document
  .getElementById("checkout")
  .addEventListener("click", handleButtonCheckout);

function handleButtonCheckout() {
  checkout();
}