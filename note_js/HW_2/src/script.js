window.addEventListener('scroll', function() {
    const menuContainer = document.getElementById('headerMenu');
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
        menuContainer.classList.add('scrolled');
    } else {
        menuContainer.classList.remove('scrolled');
    }
});