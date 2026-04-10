
var scrollToTopButton = document.getElementById('scrollToTopButton');

if (scrollToTopButton) {
    var toggleScrollToTopButton = function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'flex';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    };

    window.addEventListener('scroll', toggleScrollToTopButton);

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleScrollToTopButton();
}

