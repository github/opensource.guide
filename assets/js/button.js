
window.addEventListener('scroll', function () {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

document.getElementById('scrollToTopButton').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

