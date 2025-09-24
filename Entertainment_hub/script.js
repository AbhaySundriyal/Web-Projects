const trending = [
  { title: "Beyond Earth", image: "https://picsum.photos/id/1015/600/400" },
  { title: "Bottom Gear", image: "https://picsum.photos/id/1011/600/400" },
  { title: "Undiscovered Cities", image: "https://picsum.photos/id/1005/600/400" },
];

const recommended = [
  { title: "The Great Lands", image: "https://picsum.photos/id/1025/600/400" },
  { title: "The Diary", image: "https://picsum.photos/id/1003/600/400" },
  { title: "Earth's Untouched", image: "https://picsum.photos/id/1020/600/400" },
  { title: "No Land Beyond", image: "https://picsum.photos/id/1040/600/400" },
  { title: "During The Hunt", image: "https://picsum.photos/id/1050/600/400" },
  { title: "Autosport The Series", image: "https://picsum.photos/id/1060/600/400" },
  { title: "Same Answer II", image: "https://picsum.photos/id/1070/600/400" },
  { title: "Below Echo", image: "https://picsum.photos/id/1080/600/400" },
];

function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="title">${item.title}</div>
    `;
    container.appendChild(card);
  });
}

renderCards(trending, "trending");
renderCards(recommended, "recommended");

// Simple search filter
document.getElementById("searchInput").addEventListener("input", function(e) {
  const query = e.target.value.toLowerCase();
  const filtered = recommended.filter(item => item.title.toLowerCase().includes(query));
  renderCards(filtered, "recommended");
});
