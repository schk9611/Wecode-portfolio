const toggleBtn = document.querySelector('.header__burger .header__burger__toggleBtn');
const nav = document.querySelector('.nav .nav__list');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})