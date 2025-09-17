
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 70) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('.icon i');
            const isCollapsed = this.classList.contains('collapsed');

            // First, reset all icons to plus (+)
            document.querySelectorAll('.accordion-button .icon i').forEach(otherIcon => {
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            });

            // Then, set the clicked one to minus (-) if it's not collapsed
            if (!isCollapsed) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dots = document.querySelectorAll('.slider-nav .dot');
    const testimonials = document.querySelectorAll('.testimonial-content');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots and testimonials
            dots.forEach(d => d.classList.remove('active'));
            testimonials.forEach(t => t.classList.remove('active'));

            // Add active class to the clicked dot and corresponding testimonial
            dot.classList.add('active');
            testimonials[index].classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const shareIcons = document.querySelectorAll('.share-icon');

    shareIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const memberId = this.getAttribute('data-member');
            const socialLinksDiv = document.getElementById(`social-links-${memberId}`);

            // Hide all other social link divs
            document.querySelectorAll('.social-media-links').forEach(div => {
                if (div.id !== `social-links-${memberId}`) {
                    div.style.display = 'none';
                }
            });

            // Toggle the display of the clicked one
            if (socialLinksDiv.style.display === 'flex') {
                socialLinksDiv.style.display = 'none';
            } else {
                socialLinksDiv.style.display = 'flex';
            }
        });
    });
});
