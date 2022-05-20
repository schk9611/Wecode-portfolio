const toggleBtn = document.querySelector('.header__burger .burger__toggleBtn');
const nav = document.querySelector('.header__nav .nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})