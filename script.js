// JavaScript for Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('.main-nav ul');

    if (mobileBtn && navUl) {
        mobileBtn.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide menu
            navUl.classList.toggle('active');
        });
    }
});