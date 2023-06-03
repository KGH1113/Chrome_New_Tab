const submitBtn = document.querySelector('#submit-btn');
const resetBtn = document.querySelector('#reset-btn');
const inputField = document.querySelector('#new-tab-input');
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

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.setItem('start_page_url', inputField.value);
});

resetBtn.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.setItem('start_page_url', 'chrome://new-tab-page');
});