document.addEventListener("DOMContentLoaded", () => {
  const campaigns = [
    {
      title: "Clean Water for All",
      description: "Help build wells in underdeveloped villages.",
      goal: "$5,000"
    },
    {
      title: "Educate a Child",
      description: "Sponsor education for poor kids.",
      goal: "$2,500"
    }
  ];

  const campaignsContainer = document.getElementById("campaigns");
  campaigns.forEach(c => {
    campaignsContainer.innerHTML += `
      <div class="campaign-card">
        <h3>${c.title}</h3>
        <p>${c.description}</p>
        <p><strong>Goal:</strong> ${c.goal}</p>
      </div><hr>
    `;
  });
});
