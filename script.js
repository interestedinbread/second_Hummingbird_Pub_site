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