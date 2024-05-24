// scripts.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('roll', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
