const themeToggle = document.getElementById('theme-toggle');

// Load previously selected theme if any
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  themeToggle.checked = true;
}

// Toggle theme on slider change
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
});
