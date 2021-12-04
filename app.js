const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

document.querySelectorAll('.imagelink').forEach((image) => {
	image.addEventListener('click', () => { window.open(image.getAttribute('data-link')); });
});

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

