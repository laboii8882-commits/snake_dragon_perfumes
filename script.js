// ---------------- CART LOGIC ----------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function displayCart(containerId, totalId) {
  const cartItems = document.getElementById(containerId);
  const cartTotal = document.getElementById(totalId);

  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>No items in cart.</p>";
  } else {
    cart.forEach((item, index) => {
      total += item.price;
      cartItems.innerHTML += `
        <div class="animated-item">
          ${item.name} - ₹${item.price}
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
    });
  }
  cartTotal.innerText = `Total: ₹${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  if (document.getElementById("cart-items")) {
    displayCart("cart-items", "cart-total");
  }
  if (document.getElementById("checkout-items")) {
    displayCart("checkout-items", "checkout-total");
  }
}

// ---------------- ADMIN LOGIN ONLY ----------------
document.getElementById("login-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Fixed Admin Account
  const adminEmail = "admin@snake.com";
  const adminPassword = "snake123";

  if (email === adminEmail && password === adminPassword) {
    alert("Welcome Admin! Redirecting to Admin Panel...");
    window.location.href = "admin.html"; // redirect to admin panel
  } else {
    alert("Invalid admin credentials. Access denied.");
  }
});
