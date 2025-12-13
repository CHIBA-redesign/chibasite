const basket_count = document.querySelector(".basket-count");
const add_to_cart = document.querySelector(".btn-shop");

window.addEventListener("DOMContentLoaded", basketLoad);
add_to_cart.addEventListener("click", increaseBasketCount);

function basketLoad() {
  let count = localStorage.getItem("basketCount");
  basket_count.innerHTML = count;
}

function increaseBasketCount() {
  let count = localStorage.getItem("basketCount");
  count++;
  localStorage.setItem("basketCount", count);
  basket_count.innerHTML = count;
}
