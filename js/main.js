const openBtn = document.getElementById('menu-open-btn')
const closeBtn = document.getElementById('menu-close-btn')
const navbar = document.querySelector('.navbar')

openBtn.addEventListener('click', () => {
    navbar.style.display = 'flex'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

const closeNavbar = () => {
    navbar.style.display = 'none'
    openBtn.style.display = 'inline-block'
    closeBtn.style.display = 'none'
}

closeBtn.addEventListener('click', closeNavbar)

if(window.innerWidth < 1024) {
    document.querySelectorAll('.navbar a').forEach(navbar => {
        navbar.addEventListener('click', () => {
            closeNavbar()
        })
    })
}

window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling', window.scrollY > 0)
})