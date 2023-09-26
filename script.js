// JavaScript code here

// Function to toggle the mobile menu
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('expanded');
}

// Attach click event handler to the menu toggle button
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function () {
        toggleMenu();
    });
});

// Function to open social media links in a new tab
function openSocialMediaLink(url) {
    window.open(url, '_blank');
}

// Attach click event handlers to social media icons
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.social-icons a').forEach(function (icon) {
        icon.addEventListener('click', function (e) {
            e.preventDefault();
            var url = this.getAttribute('href');
            openSocialMediaLink(url);
        });
    });
});
