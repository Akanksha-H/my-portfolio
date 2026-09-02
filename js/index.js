const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelectorAll('.nav__link');

// Toggle mobile nav
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Close nav when any link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('nav__link--active');
                if (link.getAttribute('href') === '#' + entry.target.id) {
                    link.classList.add('nav__link--active');
                }
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
