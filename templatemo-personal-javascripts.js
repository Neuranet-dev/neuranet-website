/*
TemplateMo 593 personal shape
https://templatemo.com/tm-593-personal-shape
*/

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // *** FIX FOR MISSING SECTIONS ***
    // Intersection Observer for fade-in and slide animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .portfolio-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // *** SERVICE DETAILS FUNCTIONALITY ***
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();

            const container = this.closest('.portfolio-item');
            const detailsContainer = container.querySelector('.service-details');
            const targetId = this.dataset.target;
            const targetParagraph = detailsContainer.querySelector(`#${targetId}`);

            const allParagraphs = detailsContainer.querySelectorAll('p');
            const isParagraphActive = targetParagraph.classList.contains('active');

            // Hide all other paragraphs
            allParagraphs.forEach(p => p.classList.remove('active'));

            // If the same tag is clicked again, hide the entire details container
            if (isParagraphActive) {
                detailsContainer.classList.remove('active');
            } else {
                // Otherwise, show the container and the clicked paragraph
                detailsContainer.classList.add('active');
                targetParagraph.classList.add('active');
            }
        });
    });
});