document.addEventListener('DOMContentLoaded', () => {
    // Add a futuristic loading effect
    const main = document.querySelector('main');
    main.style.opacity = '0';
    setTimeout(() => {
        main.style.transition = 'opacity 0.5s ease-in-out';
        main.style.opacity = '1';
    }, 200);

    // Highlight current page in the menu
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('#menu a');
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.style.color = 'var(--accent-color)';
        }
    });
});