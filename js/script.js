/* ====================
   Navbar Toggle
==================== */

const navbarToggle = document.querySelector('.navbar__toggle')
const navbarMenu = document.querySelector('.navbar__menu')

const backdropWhite = document.querySelector('.navbar__backdrop--white')

const heroTitle = document.querySelector('.hero__title')

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-open')
  navbarToggle.classList.toggle('is-open')

  const isOpen = navbarMenu.classList.contains('is-open')
  navbarToggle.setAttribute('aria-expanded', isOpen)

  if (isOpen) {
    backdropWhite.classList.add('is-open')
    if (window.innerWidth < 768) heroTitle.classList.add('is-menu-open')
  } else {
    backdropWhite.classList.remove('is-open')
    if (window.innerWidth < 768) heroTitle.classList.remove('is-menu-open')
  }
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

window.addEventListener('scroll', () => {
  const isExpanded = langButton.getAttribute('aria-expanded') === 'true'

  if (isExpanded) {
    langButton.setAttribute('aria-expanded', 'false')
    langButton.classList.remove('is-open')
    langDropdown.classList.remove('is-open')
  }
})

/* ====================
   Editorial Submenu
==================== */

const editorialMenu = document.getElementById('editorial-menu')
const subMenu = document.querySelector('.navbar__submenu')
const backdrop = document.querySelector('.navbar__backdrop')
const editorialSubMenu = document.querySelector('.navbar__link--button')

editorialMenu.addEventListener('mouseenter', () => {
  if (window.innerWidth >= 1024) {
    subMenu.classList.add('is-open')
    backdrop.classList.add('is-open')

    editorialSubMenu.classList.add('is-hidden')
  }
})

editorialMenu.addEventListener('mouseleave', () => {
  if (window.innerWidth >= 1024) {
    subMenu.classList.remove('is-open')
    backdrop.classList.remove('is-open')

    editorialSubMenu.classList.remove('is-hidden')
  }
})

editorialMenu.addEventListener('click', () => {
  if (window.innerWidth < 1024) {
    subMenu.classList.toggle('is-open')
    backdrop.classList.toggle('is-open')

    editorialSubMenu.classList.toggle('is-hidden')
  }
})

function closeMenuItem() {
  navbarMenu.classList.remove('is-open')
  navbarToggle.classList.remove('is-open')
  navbarToggle.setAttribute('aria-expanded', false)

  subMenu.classList.remove('is-open')
  backdrop.classList.remove('is-open')

  backdropWhite.classList.remove('is-open')
  editorialSubMenu.classList.remove('is-hidden')

  if (window.innerWidth < 768) heroTitle.classList.remove('is-menu-open')

  scrollToTop()
}

navbarMenu.addEventListener('click', (e) => {
  const editorialItem = e.target.closest('#editorial-menu')
  if (editorialItem) return

  closeMenuItem()
})

subMenu.addEventListener('click', (event) => {
  const clickedItem = event.target.closest('.navbar__subitem')

  if (clickedItem) {
    event.stopPropagation()
    closeMenuItem()
  }
})

/* ====================
   Hero Title Scroll Effect
==================== */

const heroTitleImage = document.querySelector('.hero__title-image')

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY

  if (scrollPosition <= 0) {
    heroTitleImage.classList.remove('is-scaled')
  } else {
    heroTitleImage.classList.add('is-scaled')
  }
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
