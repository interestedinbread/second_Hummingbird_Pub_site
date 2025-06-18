
// parallax scroll logic for pub img
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const image1 = document.getElementById('parallax-img-pub')
    const image2 = document.getElementById('parallax-img-bus')
    const rect2 = image2.getBoundingClientRect()

    image1.style.transform = `translateY(${scrollY * 0.3}px)`

    if(rect2.top < window.innerHeight && rect2.bottom > 0) {
        const visibleY = window.innerHeight - rect2.top;
        image2.style.transform = `translateY(${visibleY * 0.3}px)`
    }
})