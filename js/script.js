const navbarToggle = document.querySelector('.navbar__toggle')
const navbarMenu = document.querySelector('.navbar__menu')

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-open')
  navbarToggle.classList.toggle('is-open')

  const isOpen = navbarMenu.classList.contains('is-open')
  navbarToggle.setAttribute('aria-expanded', isOpen)
})

document.querySelectorAll('.navbar__link').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
  })
})
