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

const heroVideo = document.querySelector('.hero__video')
const heroImage = document.querySelector('.hero__image')

function showFallback() {
  heroVideo.style.display = 'none'
  heroImage.style.display = 'block'
}

heroVideo.addEventListener('error', showFallback)
heroVideo.play().catch(showFallback)
