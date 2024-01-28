
const consoleBtn = document.querySelector('.console-btn .consoles')
const button = document.querySelector('.console-btn')

button.addEventListener('click', () => {
    consoleBtn.classList.toggle('active')
})