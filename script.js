// parallax scroll logic for pub img
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const image1 = document.getElementById('parallax-img-pub')
    const image2 = document.getElementById('parallax-img-bus')
    const image3 = document.getElementById('parallax-img-pub-front')
    
    // Only run parallax logic if the images exist
    if (image1) {
        image1.style.transform = `translateY(${scrollY * 0.3}px)`
    }

    if (image2 && image2.getBoundingClientRect) {
        const rect2 = image2.getBoundingClientRect()
        if(rect2.top < window.innerHeight && rect2.bottom > 0) {
            const visibleY = window.innerHeight - rect2.top;
            image2.style.transform = `translateY(${-275 + visibleY * 0.3}px)`
        }
    }

    if (image3 && image3.getBoundingClientRect) {
        const rect3 = image3.getBoundingClientRect()
        if(rect3.top < window.innerHeight && rect3.bottom > 0) {
            const visibleY = window.innerHeight - rect3.top;
            image3.style.transform = `translateY(${-295 + visibleY * 0.3}px)`
        }
    }
})

// navbar background on scroll
window.addEventListener('scroll', () => {
    // Skip navbar scroll behavior on menu page
    if (window.location.pathname.includes('menu.html')) {
        return;
    }
    
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
const logoBtn = logo && logo.parentElement && logo.parentElement.tagName === 'BUTTON' ? logo.parentElement : null;
if (logoBtn) {
    logoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });
} else if (logo) {
    logo.addEventListener('click', () => {
        console.log('Logo clicked - scrolling to top')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const closeMenuBtn = document.getElementById('close-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        // Toggle menu - if it's closed, open it; if it's open, close it
        if (mobileMenu.classList.contains('translate-x-full')) {
            mobileMenu.classList.remove('translate-x-full')
            mobileMenu.classList.add('translate-x-0')
            // Rotate menu icon
            mobileMenuBtn.classList.add('rotate-180')
        } else {
            mobileMenu.classList.remove('translate-x-0')
            mobileMenu.classList.add('translate-x-full')
            // Rotate menu icon back
            mobileMenuBtn.classList.remove('rotate-180')
        }
    })
    
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0')
        mobileMenu.classList.add('translate-x-full')
        // Rotate menu icon back when closing with X button
        mobileMenuBtn.classList.remove('rotate-180')
    })
    
    // Close menu when clicking on a menu item
    const mobileMenuLinks = mobileMenu.querySelectorAll('a')
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-0')
            mobileMenu.classList.add('translate-x-full')
            // Rotate menu icon back when closing via menu item click
            mobileMenuBtn.classList.remove('rotate-180')
        })
    })
}