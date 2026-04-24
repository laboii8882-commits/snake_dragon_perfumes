// Example checkout script
document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Order placed successfully! Thank you for shopping with Snake Dragon Perfumes.");
  this.reset();
});

// If you want to load cart items from localStorage:
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

checkoutItems.innerHTML = "";
cart.forEach(item => {
  total += item.price;
  checkoutItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
});

checkoutTotal.innerText = `Total: ₹${total}`;
