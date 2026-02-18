/* ====================
   Navbar Toggle
==================== */

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

/* ====================
   Language Button
==================== */

const langButton = document.querySelector('.navbar__lang')
const langLabel = document.querySelector('.navbar__lang-label')
const langDropdown = document.querySelector('.navbar__lang-dropdown')
const langOption = document.querySelector('.navbar__lang-option')

langButton.addEventListener('click', () => {
  langButton.classList.toggle('is-open')
  langDropdown.classList.toggle('is-open')

  const isOpen = langDropdown.classList.contains('is-open')
  langButton.setAttribute('aria-expanded', isOpen)
})

langOption.addEventListener('click', () => {
  const currentLabel = langLabel.textContent
  const currentOption = langOption.textContent

  langLabel.textContent = currentOption
  langOption.textContent = currentLabel

  langButton.setAttribute('aria-expanded', 'false')
  langButton.classList.remove('is-open')
  langDropdown.classList.remove('is-open')
})

/* ====================
   Fallback Image
==================== */

const heroVideo = document.querySelector('.hero__video')
const heroImage = document.querySelector('.hero__image')

function showFallback() {
  heroVideo.style.display = 'none'
  heroImage.style.display = 'block'
}

heroVideo.addEventListener('error', showFallback)
heroVideo.play().catch(showFallback)

/* ====================
   FAQ 
==================== */

const faqItems = document.querySelectorAll('.faq__item')

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('is-open')
  })
})

const faqTabs = document.querySelectorAll('.faq__tab-button')
const faqContent = document.querySelectorAll('.faq__list')

faqTabs[2].classList.add('is-active')
faqContent[2].classList.add('is-active')

faqTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('is-active')) return

    faqTabs.forEach((t) => t.classList.remove('is-active'))
    faqContent.forEach((c) => c.classList.remove('is-active'))
    faqItems.forEach((i) => i.classList.remove('is-open'))

    tab.classList.add('is-active')

    const tabId = tab.dataset.tab
    const activeContent = document.querySelector(`.faq__list-${tabId}`)

    activeContent.classList.add('is-active')
  })
})

/* ====================
    Back To Top
==================== */

const backToTopBtn = document.getElementById('back-to-top')

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  })
}

backToTopBtn.addEventListener('click', scrollToTop)
