// parallax scroll logic for pub img
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const image1 = document.getElementById('parallax-img-pub')
    const image2 = document.getElementById('parallax-img-bus')
    const image3 = document.getElementById('parallax-img-pub-front')
    const rect2 = image2.getBoundingClientRect()
    const rect3 = image3.getBoundingClientRect()

    image1.style.transform = `translateY(${scrollY * 0.3}px)`

    if(rect2.top < window.innerHeight && rect2.bottom > 0) {
        const visibleY = window.innerHeight - rect2.top;
        image2.style.transform = `translateY(${-275 + visibleY * 0.3}px)`
    }

    if(rect3.top < window.innerHeight && rect3.bottom > 0) {
        const visibleY = window.innerHeight - rect3.top;
        image3.style.transform = `translateY(${-295 + visibleY * 0.3}px)`
    }
})

// navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav')
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled')
    } else {
        navbar.classList.remove('navbar-scrolled')
    }
})

// smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]')
console.log('Found anchor links:', links.length)

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Link clicked:', link.getAttribute('href'))
        
        const targetId = link.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
            console.log('Target element found:', targetElement)
            
            // Calculate the target position accounting for the fixed navbar
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80
            
            // Single smooth scroll to the calculated position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        } else {
            console.log('Target element not found for:', targetId)
        }
    })
})

// logo click to scroll to top
const logo = document.getElementById('logo')
if (logo) {
    logo.addEventListener('click', () => {
        console.log('Logo clicked - scrolling to top')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}