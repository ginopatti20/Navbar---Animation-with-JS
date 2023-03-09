const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 700){
        header.classList.add('scrolled');
    } else if (scrollY <= 650) {
        header.classList.remove('scrolled');
    }
})