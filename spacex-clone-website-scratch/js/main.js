const hamburgerBtn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay-el')
const mobileMenu = document.getElementById('mobile-menu')

hamburgerBtn.addEventListener('click', toggleHamburgerMenu)

function toggleHamburgerMenu() {
  hamburgerBtn.classList.toggle('open')
  overlay.classList.toggle('overlay-show')
  mobileMenu.classList.toggle('open-menu')
  document.body.classList.toggle('stop-scrolling')
}