const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
let darkMode = true;

toggleBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
    body.removeAttribute('data-theme');
    toggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
    } else {
    body.setAttribute('data-theme', 'light');
    toggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
    }
});