const basket_count = document.querySelector(".basket-count");
const add_to_cart = document.querySelectorAll(".btn-shop");
add_to_cart.forEach((button) => {
  button.addEventListener("click", increaseBasketCount);
});

window.addEventListener("DOMContentLoaded", basketLoad);

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
