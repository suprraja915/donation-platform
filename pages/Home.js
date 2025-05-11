function renderHomePage() {
  return `
    <main>
      <h2>Welcome to Our Donation Platform</h2>
      <p>Support a cause that matters.</p>
      ${renderDonationForm()}
    </main>
  `;
}
