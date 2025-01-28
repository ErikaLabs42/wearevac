document.addEventListener('DOMContentLoaded', function() {
    // Vanta Globe Initialization
    VANTA.GLOBE({
        el: "#background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xf40000,
        color2: 0xff0000,
        size: 1.40,
        backgroundColor: 0x0
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});


