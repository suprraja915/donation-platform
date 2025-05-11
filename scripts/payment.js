document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("payment-section");
  if (!section) return;

  section.innerHTML = `
    <form onsubmit="handlePayment(event)">
      <label>Name:</label>
      <input type="text" required>

      <label>Amount ($):</label>
      <input type="number" min="1" required>

      <label>Card Number:</label>
      <input type="text" maxlength="16" required>

      <button type="submit">Donate Now</button>
    </form>
    <p id="payment-msg" style="color:green;"></p>
  `;
});

function handlePayment(event) {
  event.preventDefault();
  document.getElementById("payment-msg").innerText = "Payment successful! Thank you!";
}
