// Basic JavaScript for functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Learn more functionality coming soon!');
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
