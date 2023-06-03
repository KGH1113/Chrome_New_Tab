const toggleDarkModeBtn = document.querySelector('#toggle-dark-mode');

window.addEventListener('load', () => {
    if (localStorage.getItem('darkOrLight') === 'dark') {
        document.body.classList = 'dark-mode';
        localStorage.setItem('darkOrLight', 'dark');
    } else {
        document.body.classList = 'light-mode';
        localStorage.setItem('darkOrLight', 'light');
    }
});

toggleDarkModeBtn.addEventListener('click', () => {
    console.log(document.body.classList.value);
    if (document.body.classList.value === 'light-mode') {
        document.body.classList = 'dark-mode';
        localStorage.setItem('darkOrLight', 'dark');
    } else {
        document.body.classList = 'light-mode';
        localStorage.setItem('darkOrLight', 'light');
    }
});