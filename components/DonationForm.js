function renderDonationForm() {
  return `
    <form onsubmit="handleDonate(event)">
      <label>Name: <input type="text" required /></label><br/>
      <label>Amount: <input type="number" required /></label><br/>
      <button type="submit">Donate</button>
    </form>
  `;
}

function handleDonate(event) {
  event.preventDefault();
  alert("Thank you for your donation!");
}
