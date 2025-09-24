const searchBtn = document.getElementById('search-btn');
const input = document.getElementById('search-input');
const resultContainer = document.getElementById('result-container');
const themeToggle = document.getElementById('theme-toggle');
const fontSelect = document.getElementById('font-select');

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

searchBtn.addEventListener('click', () => {
  const word = input.value.trim();
  if (word) {
    fetchWord(word);
  }
});

function fetchWord(word) {
  resultContainer.innerHTML = `<p>Loading...</p>`;
  fetch(API_URL + word)
    .then(res => res.json())
    .then(data => {
      if (data.title === "No Definitions Found") {
        resultContainer.innerHTML = `<p>No results found for "<strong>${word}</strong>".</p>`;
      } else {
        displayResult(data[0]);
      }
    })
    .catch(err => {
      resultContainer.innerHTML = `<p>Error fetching data.</p>`;
      console.error(err);
    });
}

function displayResult(data) {
  const phonetic = data.phonetics.find(p => p.audio) || {};
  const meaning = data.meanings[0];
  resultContainer.innerHTML = `
    <h2>${data.word}</h2>
    <p>${phonetic.text || ''}</p>
    ${phonetic.audio ? `<button onclick="new Audio('${phonetic.audio}').play()">🔊 Play</button>` : ""}
    <h3>${meaning.partOfSpeech}</h3>
    <ul>
      ${meaning.definitions.map(d => `<li>${d.definition}</li>`).join('')}
    </ul>
  `;
}

// Dark mode toggle
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

// Font switcher
fontSelect.addEventListener('change', (e) => {
  document.body.style.fontFamily = e.target.value;
});
