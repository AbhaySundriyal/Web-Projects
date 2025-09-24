const planets = {
  mercury: {
    name: "Mercury",
    description: "Mercury is the closest planet to the Sun and the smallest planet in our solar system...",
    rotationTime: "58.6 days",
    revolutionTime: "88 days",
    radius: "2,439.7 km",
    averageTemp: "167°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg"
  },
  venus: {
    name: "Venus",
    description: "Venus is the second planet from the Sun and is similar in size to Earth...",
    rotationTime: "243 days",
    revolutionTime: "225 days",
    radius: "6,051.8 km",
    averageTemp: "464°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"
  },
  earth: {
    name: "Earth",
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life...",
    rotationTime: "0.99 days",
    revolutionTime: "365.26 days",
    radius: "6,371 km",
    averageTemp: "16°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
  },
  mars: {
    name: "Mars",
    description: "Mars, also known as the Red Planet, is the fourth planet from the Sun...",
    rotationTime: "1.03 days",
    revolutionTime: "687 days",
    radius: "3,389.5 km",
    averageTemp: "-63°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
  },
  jupiter: {
    name: "Jupiter",
    description: "Jupiter is the largest planet in our solar system and is known for its Great Red Spot...",
    rotationTime: "0.41 days",
    revolutionTime: "4,333 days",
    radius: "69,911 km",
    averageTemp: "-108°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
  },
  saturn: {
    name: "Saturn",
    description: "Saturn is famous for its stunning ring system...",
    rotationTime: "0.45 days",
    revolutionTime: "10,759 days",
    radius: "58,232 km",
    averageTemp: "-139°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"
  },
  uranus: {
    name: "Uranus",
    description: "Uranus is an ice giant with a blue-green color due to methane in its atmosphere...",
    rotationTime: "0.72 days",
    revolutionTime: "30,687 days",
    radius: "25,362 km",
    averageTemp: "-197°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
  },
  neptune: {
    name: "Neptune",
    description: "Neptune is the farthest planet from the Sun and is known for its deep blue color...",
    rotationTime: "0.67 days",
    revolutionTime: "60,190 days",
    radius: "24,622 km",
    averageTemp: "-201°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"
  }
};

function loadPlanet(planet) {
  const p = planets[planet];
  document.getElementById("planetName").textContent = p.name;
  document.getElementById("planetDescription").textContent = p.description;
  document.getElementById("rotationTime").textContent = p.rotationTime;
  document.getElementById("revolutionTime").textContent = p.revolutionTime;
  document.getElementById("radius").textContent = p.radius;
  document.getElementById("averageTemp").textContent = p.averageTemp;
  document.getElementById("planetImage").src = p.image;
  document.getElementById("planetImage").alt = p.name + " Image";
}

loadPlanet("earth");
