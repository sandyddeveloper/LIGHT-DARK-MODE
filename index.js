

const theme = document.getElementById('theme');
theme.addEventListener('change', toggleTheme);

function toggleTheme() {
    document.body.classList.toggle('dark');
}
